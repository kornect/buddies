import { Injectable } from '@angular/core';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Selector, State, Store } from '@ngxs/store';
import { of, switchMap } from 'rxjs';
import { UserProfile } from '@/app/store/models';
import { BaseState } from '@/app/store/base.state';

import { GetProfileAction } from './profile.actions';
import { AuthService } from '@/app/auth';

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
  constructor(
    private authService: AuthService,
    private store: Store
  ) {
    super();

    this.authService.authStateChanged
      .pipe(
        untilDestroyed(this),
        switchMap((event) => {
          if (event.session) {
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
    return state.profile?.date_of_birth && state?.profile?.location;
  }

  /*

  @Action(GetProfileAction)
  getProfileAction({ patchState }: StateContext<ProfileStateModel>) {
    return this.getProfileGQL.fetch({ id: this.authService.getUser()?.id }).pipe(
      map(({ data, error }) => {
        if (error) {
          throw this.getGraphQLError(error);
        }

        patchState({
          profile: data.profiles_by_pk
        });
      })
    );
  }

  @Action(InsertProfileAction)
  insertProfileAction({ getState, patchState }: StateContext<ProfileStateModel>, { payload }: InsertProfileAction) {
    return this.insertProfileGQL.mutate({ ...payload }).pipe(
      map(({ data }) => {
        patchState({
          profile: Object.assign({}, getState().profile, data?.insert_profiles_one)
        });
      })
    );
  }

  @Action(UpdateProfileRelationshipAction)
  updateProfileRelationshipAction(
    { getState, patchState }: StateContext<ProfileStateModel>,
    { payload }: UpdateProfileRelationshipAction
  ) {
    return this.updateProfileRelationPreferenceGQL
      .mutate({
        id: this.authService.getUser()?.id,
        seeking_relationship: payload.seeking_relationship
      })
      .pipe(
        map(({ data }) => {
          patchState({
            profile: Object.assign({}, getState().profile, data?.update_profiles_by_pk)
          });
        })
      );
  }

  @Action(UpdateProfileSexualityAction)
  updateProfileSexualityAction({ getState, patchState }: StateContext<ProfileStateModel>,
                               { payload }: UpdateProfileSexualityAction) {
    return this.updateSexualityGQL.mutate({ id: this.authService.getUser()?.id, ...payload }).pipe(
      map(({ data }) => {
        patchState({
          profile: Object.assign({}, getState().profile, data?.update_profiles_by_pk)
        });
      }),
      catchError((error) => {
        throw this.getGraphQLError(error);
      })
    );
  }

  @Action(UpdateProfileBioAction)
  updateProfileBioAction(
    { getState, patchState }: StateContext<ProfileStateModel>,
    { payload }: UpdateProfileBioAction
  ) {
    return this.updateProfileBioGQL.mutate({ id: this.authService.getUser()?.id, ...payload }).pipe(
      map(({ data }) => {
        patchState({
          profile: Object.assign({}, getState().profile, data?.update_profiles_by_pk?.bio)
        });
      }),
      catchError((error) => {
        throw this.getGraphQLError(error);
      })
    );
  }

  @Action(UpdateLocationAction)
  updateProfileLocationAction(
    { getState, patchState }: StateContext<ProfileStateModel>,
    { payload }: UpdateLocationAction
  ) {
    let formData = {
      ...payload,
      location: JSON.stringify({
        type: 'Point',
        coordinates: [payload.longitude, payload.latitude]
      })
    };

    delete formData.search;
    delete formData['longitude'];
    delete formData['latitude'];

    return this.updateProfileLocationGQL
      .mutate({
        id: this.authService.getUser()?.id,
        area: payload.area,
        city: payload.city,
        country: payload.country,
        province: payload.province,
        location: JSON.stringify({
          type: 'Point',
          coordinates: [payload.longitude, payload.latitude]
        })
      })
      .pipe(
        map(({ data }) => {
          patchState({
            profile: Object.assign({}, getState().profile, data?.update_profiles_by_pk)
          });
        }),
        catchError((error) => {
          throw this.getGraphQLError(error);
        })
      );
  }
  */

}
