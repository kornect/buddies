import { Injectable } from '@angular/core';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { catchError, map, of, switchMap } from 'rxjs';

import { NHostService } from '@/app/common/nhost';
import {
  GetProfileGQL,
  InsertProfileGQL,
  UpdateProfileBioGQL,
  UpdateProfileLocationGQL,
  UpdateProfileRelationPreferenceGQL,
  UpdateSexualityGQL
} from '@/app/graphql/profiles';
import { UserProfile } from '@/app/store/models';
import { BaseState } from '@/app/store/state/base.state';

import {
  GetProfileAction,
  InsertProfileAction,
  UpdateLocationAction,
  UpdateProfileBioAction,
  UpdateProfileRelationshipAction,
  UpdateProfileSexualityAction
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
  constructor(
    private getProfileGQL: GetProfileGQL,
    private insertProfileGQL: InsertProfileGQL,
    private updateProfileBioGQL: UpdateProfileBioGQL,
    private updateProfileLocationGQL: UpdateProfileLocationGQL,
    private updateProfileRelationPreferenceGQL: UpdateProfileRelationPreferenceGQL,
    private updateSexualityGQL: UpdateSexualityGQL,
    private hostService: NHostService,
    private store: Store
  ) {
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
    return state.profile?.date_of_birth && state?.profile?.location;
  }

  @Action(GetProfileAction)
  getProfileAction({ patchState }: StateContext<ProfileStateModel>) {
    return this.getProfileGQL.fetch({ id: this.getUserId() }).pipe(
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
        id: this.getUserId(),
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
    return this.updateSexualityGQL.mutate({ id: this.getUserId(), ...payload }).pipe(
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
    return this.updateProfileBioGQL.mutate({ id: this.getUserId(), ...payload }).pipe(
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
        id: this.getUserId(),
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
}
