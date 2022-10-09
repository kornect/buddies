import { Injectable } from '@angular/core';

import { untilDestroyed } from '@ngneat/until-destroy';
import { Action, State, StateContext, Store } from '@ngxs/store';
import { of, switchMap } from 'rxjs';

import { NHostService } from '@/app/common/nhost';
import { GET_PROFILE, INSERT_PROFILE, UPDATE_PROFILE_LOCATION } from '@/app/store/graphql';
import { UserProfile } from '@/app/store/models';
import { BaseState } from '@/app/store/state/base.state';

import { AddProfileAction, GetProfileAction, UpdateLocationAction, UpdateProfileAction } from './profile.actions';


export interface ProfileStateModel {
  profile: UserProfile | null;
}

const defaults = {
  profile: null,
};

@State<ProfileStateModel>({
  name: 'profile',
  defaults,
})
@Injectable()
export class ProfileState extends BaseState {
  constructor(private hostService: NHostService, private store: Store) {
    super(hostService);

    this.authStateChanged
      .pipe(
        untilDestroyed(this),
        switchMap((user) => {
          if (user) {
            return this.store.dispatch(new GetProfileAction());
          } else {
            return of({});
          }
        })
      )
      .subscribe();
  }

  @Action(GetProfileAction)
  getProfileAction({ getState, setState }: StateContext<ProfileStateModel>) {
    return this.withObservable(async () => {
      const { data, error } = await this.hostService.graphql.request(GET_PROFILE, {
        id: this.getUserId(),
      });

      if (error) {
        throw new Error('Failure getting user profile');
      }

      setState({
        ...getState(),
        profile: data.profile,
      });
    });
  }

  @Action(AddProfileAction)
  addProfileAction({ getState, setState }: StateContext<ProfileStateModel>, { payload }: AddProfileAction) {
    return this.withObservable(async () => {
      const { data, error } = await this.hostService.graphql.request(INSERT_PROFILE, {
        ...payload,
        id: this.getUserId(),
      });

      if (error) {
        throw this.getGraphQLError(error);
      }

      setState({
        ...getState(),
        ...data,
      });
    });
  }

  @Action(UpdateProfileAction)
  updateProfileAction({ getState, setState }: StateContext<ProfileStateModel>, { payload }: UpdateProfileAction) {
    return this.withObservable(async () => {
      const { data, error } = await this.hostService.graphql.request(GET_PROFILE, {
        ...payload,
        id: this.getUserId(),
      });

      if (error) {
        throw new Error('Failure getting user profile');
      }

      setState({
        ...getState(),
        profile: data.profile,
      });
    });
  }

  @Action(UpdateLocationAction)
  updateProfileLocationAction(
    { getState, setState }: StateContext<ProfileStateModel>,
    { payload }: UpdateLocationAction
  ) {
    return this.withObservable(async () => {
      let formData = {
        ...payload,
        location: JSON.stringify({
          type: 'Point',
          coordinates: [payload.longitude, payload.latitude],
        }),
      };

      delete formData.search;
      delete formData['longitude'];
      delete formData['latitude'];

      const { data, error } = await this.hostService.graphql.request(UPDATE_PROFILE_LOCATION, {
        ...formData,
        id: this.getUserId(),
      });

      if (error) {
        throw this.getGraphQLError(error);
      }

      setState({
        ...getState(),
        profile: {
          ...getState().profile,
          ...data?.location,
          ...formData,
        },
      });
    });
  }
}
