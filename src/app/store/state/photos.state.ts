import { Injectable } from '@angular/core';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { addMinutes } from 'date-fns';
import { of, switchMap } from 'rxjs';

import { NHostService } from '@/app/common/nhost';
import { GET_FILES } from '@/app/store/graphql';
import { UserPhoto } from '@/app/store/models';
import { UpdatePhotoUrlAction } from '@/app/store/state/account.actions';
import { BaseState } from '@/app/store/state/base.state';
import {
  GetAvatarAction,
  GetPhotosAction,
  UploadAvatarAction,
  UploadPhotoAction,
} from '@/app/store/state/photos.actions';
import { defaultAvatar, isNullOrEmpty } from '@/app/utils';

export interface PhotosStateModel {
  avatarUrl: string | null;
  photos: UserPhoto[];
}

const defaults = {
  avatarUrl: null,
  photos: [],
};

@State<PhotosStateModel>({
  name: 'photos',
  defaults,
})
@UntilDestroy()
@Injectable()
export class PhotosState extends BaseState {
  constructor(private hostService: NHostService, private store: Store) {
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
            avatarUrl: photo.url,
          });
        } else {
          const url = await this.getPhotoDetails(user.avatarUrl);
          setState({
            ...getState(),
            avatarUrl: url.url,
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
        file,
      });

      if (error) {
        throw new Error('Failed to upload photo');
      }

      const photo = await this.getPhotoDetails(fileMetadata.id);

      await dispatch(new UpdatePhotoUrlAction({ photoUrl: photo.id }));

      setState({
        ...getState(),
        photos: [...getState().photos, photo],
        avatarUrl: photo.url,
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
        file,
      });

      if (error) {
        throw new Error('Failed to upload photo');
      }

      const photo = await this.getPhotoDetails(fileMetadata.id);

      setState({
        ...getState(),
        photos: [...getState().photos, photo],
      });
    });
  }

  @Action(GetPhotosAction)
  getPhotosAction({ setState }: StateContext<PhotosStateModel>) {
    return this.withObservable(async () => {
      const { data, error } = await this.hostService.graphql.request(GET_FILES, {
        userId: this.getUserId(),
      });

      if (error) {
        throw new Error('Failed to get photos');
      }

      const photos = new Array<UserPhoto>();
      for (const file of data.files) {
        const photo = await this.getPhotoDetails(file.id);

        photos.push(photo);
      }

      // check avatar
      const avatar = photos.find((p) => p.id === this.getUser()?.avatarUrl);

      setState({
        avatarUrl: avatar?.url || null,
        photos: photos,
      });
    });
  }

  private async getPhotoDetails(fileId: string): Promise<UserPhoto> {
    const { presignedUrl, error: urlError } = await this.hostService.storage.getPresignedUrl({
      fileId: fileId,
    });

    if (urlError) {
      throw new Error('Failed to get file url');
    }

    return {
      id: fileId,
      url: presignedUrl.url,
      expiresAt: addMinutes(new Date(), presignedUrl.expiration),
    } as UserPhoto;
  }
}
