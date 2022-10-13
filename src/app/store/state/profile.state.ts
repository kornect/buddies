import { Injectable } from '@angular/core';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { of, switchMap } from 'rxjs';

import { NHostService } from '@/app/common/nhost';
import {
  GET_PROFILE,
  INSERT_PROFILE,
  UPDATE_PROFILE,
  UPDATE_PROFILE_BIO,
  UPDATE_PROFILE_LOCATION
} from '@/app/store/graphql';
import { UserProfile } from '@/app/store/models';
import { BaseState } from '@/app/store/state/base.state';
import { isNullOrUndefined } from '@/app/utils';

import {
  GetProfileAction,
  InsertProfileAction,
  UpdateLocationAction,
  UpdateProfileAction,
  UpdateProfileBioAction
} from './profile.actions';


export interface ProfileStateModel {
  profile: UserProfile | null;
}

const defaults = {
  profile: null
};

@State<ProfileStateModel>({
  name: 'profile',
  defaults
})
@UntilDestroy()
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

  @Selector()
  static profile(state: ProfileStateModel) {
    return state.profile;
  }

  @Selector()
  static completedProfile(state: ProfileStateModel) {
    return !isNullOrUndefined(state.profile);
  }

  @Action(GetProfileAction)
  getProfileAction({ getState, setState }: StateContext<ProfileStateModel>) {
    return this.withObservable(async () => {
      const { data, error } = await this.hostService.graphql.request(GET_PROFILE, {
        id: this.getUserId()
      });

      if (error) {
        this.handleError(error, 'Failure getting user profile');
      }

      setState({
        ...getState(),
        profile: data.profile
      });
    });
  }

  @Action(InsertProfileAction)
  insertProfileAction({ getState, setState }: StateContext<ProfileStateModel>, { payload }: InsertProfileAction) {
    return this.withObservable(async () => {
      const { data, error } = await this.hostService.graphql.request(INSERT_PROFILE, {
        ...payload,
        id: this.getUserId()
      });

      if (error) {
        throw this.getGraphQLError(error);
      }

      setState({
        ...getState(),
        profile: {
          ...getState().profile,
          ...data.profile
        }
      });
    });
  }

  @Action(UpdateProfileBioAction)
  updateProfileBioAction({ getState, setState }: StateContext<ProfileStateModel>, { payload }: UpdateProfileBioAction) {
    return this.withObservable(async () => {
      const { data, error } = await this.hostService.graphql.request(UPDATE_PROFILE_BIO, {
        ...payload,
        id: this.getUserId()
      });

      if (error) {
        throw this.getGraphQLError(error);
      }

      setState({
        ...getState(),
        profile: {
          ...getState().profile,
          ...data.profile
        }
      });
    });
  }

  @Action(UpdateProfileAction)
  updateProfileAction({ getState, setState }: StateContext<ProfileStateModel>, { payload }: UpdateProfileAction) {
    return this.withObservable(async () => {
      const { data, error } = await this.hostService.graphql.request(UPDATE_PROFILE, {
        ...payload,
        id: this.getUserId()
      });

      if (error) {
        throw this.getGraphQLError(error);
      }

      setState({
        ...getState(),
        profile: {
          ...getState().profile,
          ...data.profile
        }
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
        ...payload
        /*  location: JSON.stringify({
            type: 'Point',
            coordinates: [payload.longitude, payload.latitude]
          }) */
      };

      delete formData.search;
      delete formData['longitude'];
      delete formData['latitude'];

      const { data, error } = await this.hostService.graphql.request(UPDATE_PROFILE_LOCATION, {
        ...formData,
        id: this.getUserId()
      });

      if (error) {
        throw this.getGraphQLError(error);
      }

      setState({
        ...getState(),
        profile: {
          ...getState().profile,
          ...data?.location,
          ...formData
        }
      });
    });
  }
}
