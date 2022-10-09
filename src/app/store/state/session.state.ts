import { Injectable } from '@angular/core';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { from, switchMap } from 'rxjs';

import { NHostService } from '@/app/common/nhost';
import { SessionUser } from '@/app/store/models/session-user';
import { AccountState } from '@/app/store/state/account.state';
import { BaseState } from '@/app/store/state/base.state';
import { PhotosState } from '@/app/store/state/photos.state';
import { ProfileState } from '@/app/store/state/profile.state';

import { ReloadUserSessionAction, SetUserAction, SignInAction, SignOutAction } from './session.actions';


export interface SessionStateModel {
  user: SessionUser | null;
}

const defaults = {
  user: null,
};

@State<SessionStateModel>({
  name: 'session',
  defaults,
  children: [PhotosState, ProfileState, AccountState],
})
@UntilDestroy()
@Injectable()
export class SessionState extends BaseState {
  constructor(private hostService: NHostService, private store: Store) {
    super(hostService);

    this.authStateChanged
      .pipe(
        untilDestroyed(this),
        switchMap((user) => {
          return this.store.dispatch(new SetUserAction(user));
        })
      )
      .subscribe();
  }

  @Selector()
  static user(state: SessionStateModel) {
    return state.user;
  }

  @Action(SetUserAction)
  setUserAction({ getState, patchState }: StateContext<SessionStateModel>, { payload }: SetUserAction) {
    const state = getState();
    patchState({ ...state, user: payload });
  }

  @Action(SignInAction)
  signInAction({ setState }: StateContext<SessionStateModel>, { payload }: SignInAction) {
    return this.withObservable(async () => {
      const { error } = await this.hostService.auth.signIn(payload);

      if (error) {
        throw new Error(error.message);
      }
    });
  }

  @Action(SignOutAction)
  signOutAction({ setState }: StateContext<SessionStateModel>) {
    return this.withObservable(async () => {
      const { error } = await this.hostService.auth.signOut();
      if (error) {
        throw new Error(error.message);
      }

      setState({ user: null });
    });
  }

  @Action(ReloadUserSessionAction)
  reloadUserSessionAction({}: StateContext<SessionStateModel>) {
    return from(this.hostService.auth.refreshSession());
  }
}
