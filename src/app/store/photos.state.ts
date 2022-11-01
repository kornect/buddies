import { Injectable } from '@angular/core';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { addMinutes } from 'date-fns';
import { map, of, switchMap } from 'rxjs';


import { NhostService } from '@/app/common/nhost';
import { Uuid_Comparison_Exp } from '@/app/graphql';
import { GetPhotosGQL } from '@/app/graphql/photos';
import { UserPhoto } from '@/app/store/models';
import { BaseState } from '@/app/store/base.state';
import {
  GetAvatarAction,
  GetPhotosAction,
  UploadAvatarAction,
  UploadPhotoAction
} from '@/app/store/photos.actions';
import { UpdatePhotoUrlAction } from '@/app/store/user.actions';
import { defaultAvatar, isNullOrEmpty } from '@/app/utils';

export interface PhotosStateModel {
  avatarUrl: string | null;
  photos: UserPhoto[];
}

const defaults = {
  avatarUrl: null,
  photos: []
};

@State<PhotosStateModel>({
  name: 'photos',
  defaults
})
@UntilDestroy()
@Injectable()
export class PhotosState extends BaseState {
  constructor(private getPhotosGQL: GetPhotosGQL, private hostService: NhostService, private store: Store) {
    super(hostService);

    this.authStateChanged
      .pipe(
        untilDestroyed(this),
        switchMap((user) => {
          if (user) {
            return this.store.dispatch(new GetAvatarAction());
          } else {
            return of({});
          }
        })
      )
      .subscribe();
  }

  @Selector()
  static uploadedAvatar(state: PhotosStateModel) {
    return !isNullOrEmpty(state.avatarUrl);
  }

  @Action(GetAvatarAction)
  getAvatarAction({ setState, getState }: StateContext<PhotosStateModel>) {
    return this.withObservable(async () => {
      const user = this.getUser();
      if (user?.avatarUrl && !defaultAvatar(user.avatarUrl)) {
        const photo = getState().photos.find((p) => p.id === user?.avatarUrl);
        if (photo) {
          setState({
            ...getState(),
            avatarUrl: photo.url
          });
        } else {
          const url = await this.getPhotoDetails(user.avatarUrl);
          setState({
            ...getState(),
            avatarUrl: url.url
          });
        }
      }
    });
  }

  @Action(UploadAvatarAction)
  uploadAvatarAction(
    { setState, getState, dispatch }: StateContext<PhotosStateModel>,
    { payload }: UploadAvatarAction
  ) {
    return this.withObservable(async () => {
      // upload file
      const { file } = payload;
      if (!file) {
        throw new Error('No file provided');
      }

      const { fileMetadata, error } = await this.hostService.storage.upload({
        file
      });

      if (error) {
        throw new Error('Failed to upload photo');
      }

      const photo = await this.getPhotoDetails(fileMetadata.id);

      await dispatch(new UpdatePhotoUrlAction({ photoUrl: photo.id }));

      setState({
        ...getState(),
        photos: [...getState().photos, photo],
        avatarUrl: photo.url
      });
    });
  }

  @Action(UploadPhotoAction)
  uploadPhotoAction({ setState, getState }: StateContext<PhotosStateModel>, { payload }: UploadPhotoAction) {
    return this.withObservable(async () => {
      // upload file
      const { file } = payload;
      if (!file) {
        throw new Error('No file provided');
      }

      const { fileMetadata, error } = await this.hostService.storage.upload({
        file
      });

      if (error) {
        throw new Error('Failed to upload photo');
      }

      const photo = await this.getPhotoDetails(fileMetadata.id);

      setState({
        ...getState(),
        photos: [...getState().photos, photo]
      });
    });
  }

  @Action(GetPhotosAction)
  getPhotosAction({ patchState }: StateContext<PhotosStateModel>) {
    // @ts-ignore
    return this.getPhotosGQL
      .fetch({
        userId: Object.assign({}, { _eq: this.getUser() }) as unknown as Uuid_Comparison_Exp
      })
      .pipe(
        map(({ data, error }) => {
          if (error) {
            throw this.getGraphQLError(error);
          }

          const photos = new Array<UserPhoto>();

          /*

          for (const file of data.files) {
            const photo = await this.getPhotoDetails(file.id);

            photos.push(photo);
          }

          // check avatar
          const avatar = photos.find((p) => p.id === this.getUser()?.avatarUrl);
*/
          patchState({
            photos: photos
          });
        })
      );
  }

  private async getPhotoDetails(fileId: string): Promise<UserPhoto> {
    const { presignedUrl, error: urlError } = await this.hostService.storage.getPresignedUrl({
      fileId: fileId
    });

    if (urlError) {
      throw new Error('Failed to get file url');
    }

    return {
      id: fileId,
      url: presignedUrl.url,
      expiresAt: addMinutes(new Date(), presignedUrl.expiration)
    } as UserPhoto;
  }
}
