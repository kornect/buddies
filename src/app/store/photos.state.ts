import { Injectable } from '@angular/core';

import { UntilDestroy } from '@ngneat/until-destroy';
import { Selector, State, Store } from '@ngxs/store';
import { UserPhoto } from '@/app/store/models';
import { BaseState } from '@/app/store/base.state';
import { isNullOrEmpty } from '@/app/utils';
import { AuthService } from '@/app/auth';

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
  constructor(private authService: AuthService, private store: Store) {
    super();
  }

  @Selector()
  static uploadedAvatar(state: PhotosStateModel) {
    return !isNullOrEmpty(state.avatarUrl);
  }
}
