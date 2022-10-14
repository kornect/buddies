import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { from, switchMap, tap } from 'rxjs';

import { NHostService } from '@/app/common/nhost';
import {
  GetUserGQL,
  UpdateUserAvatarUrlGQL,
  UpdateUserDisplayNameGQL,
} from '@/app/graphql/accounts/accounts.generated';
import { User } from '@/app/store/models/user';
import { BaseState } from '@/app/store/state/base.state';
import { PhotosState } from '@/app/store/state/photos.state';
import { ProfileState } from '@/app/store/state/profile.state';

import {
  ChangeEmailAction,
  ChangePasswordAction,
  GetUserAction,
  ReloadUserSessionAction,
  ResetPasswordAction,
  ResetPasswordRequestAction,
  SendVerificationLinkAction,
  SetUserAction,
  SignInAction,
  SignOutAction,
  SignUpAction,
  UpdateDisplayNameAction,
  UpdatePhotoUrlAction,
} from './user.actions';

export interface UserStateModel {
  user: User | null;
}

const defaults = {
  user: null,
};

@State<UserStateModel>({
  name: 'user',
  defaults,
  children: [PhotosState, ProfileState],
})
@UntilDestroy()
@Injectable()
export class UserState extends BaseState {
  constructor(
    private updateUserDisplayNameGQL: UpdateUserDisplayNameGQL,
    private updateUserAvatarUrlGQL: UpdateUserAvatarUrlGQL,
    private getUserGQL: GetUserGQL,
    private hostService: NHostService,
    private store: Store,
    private router: Router
  ) {
    super(hostService);

    this.authStateChanged
      .pipe(
        untilDestroyed(this),
        switchMap((user) => {
          if (user) {
            return this.store.dispatch([new GetUserAction(), new SetUserAction(user)]);
          }
          return this.store.dispatch(new SetUserAction(null));
        })
      )
      .subscribe();
  }

  @Selector()
  static user(state: UserStateModel) {
    return state.user;
  }

  @Selector()
  static isComplete(state: UserStateModel) {
    return state.user?.displayName !== state.user?.email;
  }

  @Action(GetUserAction)
  getUserAction({ dispatch }: StateContext<UserStateModel>) {
    return this.getUserGQL.fetch({ id: this.getUserId() }).pipe(
      switchMap(({ data }) => {
        return dispatch(new SetUserAction(data.user));
      })
    );
  }

  @Action(SetUserAction)
  setUserAction({ getState, patchState, dispatch }: StateContext<UserStateModel>, { payload }: SetUserAction) {
    if (payload) {
      console.log('setUserAction', payload);
      const user = Object.assign({}, this.getUser(), payload);
      patchState({
        user: Object.assign({}, user, {
          displayName: user?.displayName === user?.email ? null : user?.displayName || null,
          avatar: '',
        }),
      });
    } else {
      patchState({ user: null });
    }
  }

  @Action(SignInAction)
  signInAction({ setState }: StateContext<UserStateModel>, { payload }: SignInAction) {
    return this.withObservable(async () => {
      const { error } = await this.hostService.auth.signIn(payload);

      if (error) {
        throw new Error(error.message);
      }
    });
  }

  @Action(SignOutAction)
  signOutAction({ setState }: StateContext<UserStateModel>) {
    return this.withObservable(async () => {
      const { error } = await this.hostService.auth.signOut();
      if (error) {
        throw new Error(error.message);
      }

      setState({ user: null });

      this.router.navigate(['']).then();
    });
  }

  @Action(ReloadUserSessionAction)
  reloadUserSessionAction({}: StateContext<UserStateModel>) {
    return from(this.hostService.auth.refreshSession()).pipe(
      switchMap(() => this.store.dispatch(new SetUserAction(this.getUser())))
    );
  }

  @Action(SignUpAction)
  signUpAction({ setState }: StateContext<UserStateModel>, { payload }: SignUpAction) {
    return this.withObservable(async () => {
      const { error } = await this.hostService.auth.signUp({
        email: payload.email,
        password: payload.password,
        options: {
          redirectTo: `${window.location.origin}/auth/verify-email`,
          metadata: {
            acceptedTerms: payload.acceptedTerms,
          },
        },
      });

      if (error) {
        this.handleError(error, 'Sign up failed');
      }
    });
  }

  @Action(UpdateDisplayNameAction)
  updateDisplayNameAction(
    { dispatch, patchState, getState }: StateContext<UserStateModel>,
    { payload }: UpdateDisplayNameAction
  ) {
    return this.updateUserDisplayNameGQL
      .mutate({
        id: this.getUserId(),
        displayName: payload.displayName,
      })
      .pipe(
        tap(({ data }) => {
          patchState({
            user: Object.assign({}, getState().user, {
              displayName: data?.updateUser?.displayName,
            }),
          });
        }),
        switchMap(() => dispatch(new ReloadUserSessionAction()))
      );
  }

  @Action(ChangeEmailAction)
  changeEmailAction({ dispatch }: StateContext<UserStateModel>, { payload }: ChangeEmailAction) {
    return this.withObservable(async () => {
      const { error } = await this.hostService.auth.changeEmail({
        newEmail: payload.email,
      });

      if (error) {
        this.handleError(error, 'Failure changing email');
      }

      dispatch(new ReloadUserSessionAction());
    });
  }

  @Action(ChangePasswordAction)
  changePasswordAction({ dispatch }: StateContext<UserStateModel>, { payload }: ChangePasswordAction) {
    return this.withObservable(async () => {
      const { error } = await this.hostService.auth.changePassword({
        newPassword: payload.password,
      });

      if (error) {
        this.handleError(error, 'Failure to change password');
      }
    });
  }

  @Action(ResetPasswordRequestAction)
  resetPasswordRequestAction({ dispatch }: StateContext<UserStateModel>, { payload }: ResetPasswordRequestAction) {
    return this.withObservable(async () => {
      const { error } = await this.hostService.auth.resetPassword({
        email: payload.email,
        options: {
          redirectTo: `${window.location.origin}/auth/reset-password`,
        },
      });

      if (error) {
        this.handleError(error, 'Failure resetting password');
      }
    });
  }

  @Action(UpdatePhotoUrlAction)
  updatePhotoUrlAction({ dispatch }: StateContext<UserStateModel>, { payload }: UpdatePhotoUrlAction) {
    return this.updateUserAvatarUrlGQL
      .mutate({
        id: this.getUserId(),
        avatarUrl: payload.photoUrl,
      })
      .pipe(switchMap(() => dispatch(new ReloadUserSessionAction())));
  }

  @Action(SendVerificationLinkAction)
  sendVerificationLinkAction({ dispatch }: StateContext<UserStateModel>, { payload }: SendVerificationLinkAction) {
    return this.withObservable(async () => {
      const { error } = await this.hostService.auth.sendVerificationEmail({
        email: payload.email,
      });

      if (error) {
        this.handleError(error, "Failure sending verification email'");
      }
    });
  }

  @Action(ResetPasswordAction)
  resetPasswordAction({ dispatch }: StateContext<UserStateModel>, { payload }: ResetPasswordAction) {
    return this.withObservable(async () => {
      const { error } = await this.hostService.auth.changePassword({
        ticket: payload.token,
        newPassword: payload.password,
      });

      if (error) {
        this.handleError(error, 'Failure confirming password');
      }
    });
  }
}
