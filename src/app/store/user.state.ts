import { Injectable } from '@angular/core';

import { UntilDestroy } from '@ngneat/until-destroy';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { switchMap, tap } from 'rxjs';
import { User } from '@/app/store/models/user';
import { BaseState } from '@/app/store/base.state';
import { PhotosState } from '@/app/store/photos.state';
import { ProfileState } from '@/app/store/profile.state';

import {
  ChangeEmailAction,
  ChangePasswordAction,
  GetUserAction,
  ResetPasswordAction,
  ResetPasswordRequestAction,
  SendSignUpToken,
  SetUserAction,
  SignInAction,
  SignOutAction,
  SignUpAction
} from './user.actions';
import { AuthService } from '@/app/auth';
import { GetUserGQL, SendSignupOtpGQL, SignUpGQL } from '@/app/graphql/user/user.generated';

export interface UserStateModel {
  user: User | null;
}

const defaults = {
  user: null
};

@State<UserStateModel>({
  name: 'user',
  defaults,
  children: [PhotosState, ProfileState]
})
@UntilDestroy()
@Injectable()
export class UserState extends BaseState {
  constructor(
    private getUserGQL: GetUserGQL,
    private signUpGQL: SignUpGQL,
    private sendSignupOtpGQL: SendSignupOtpGQL,
    private authService: AuthService
  ) {
    super();
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
    return this.getUserGQL.fetch({ uuid: this.authService.getUser()?.id }).pipe(
      switchMap(({ data }) => {
        return dispatch(new SetUserAction(data.users_by_pk));
      })
    );
  }

  @Action(SetUserAction)
  setUserAction({ getState, patchState, dispatch }: StateContext<UserStateModel>, { payload }: SetUserAction) {
    if (payload) {
      const user = Object.assign({}, this.authService.getUser(), payload);
      patchState({
        user: Object.assign({}, user, {
          displayName: user?.displayName === user?.email ? null : user?.displayName || null,
          avatar: ''
        })
      });
    } else {
      patchState({ user: null });
    }
  }

  @Action(SignInAction)
  signInAction({ setState }: StateContext<UserStateModel>, { payload }: SignInAction) {
    return this.authService.signIn(payload);
  }

  @Action(SignOutAction)
  signOutAction({ setState }: StateContext<UserStateModel>) {
    return this.authService.logOut().pipe(tap(() => {
      setState({ user: null });
    }));
  }

  @Action(SignUpAction)
  signUpAction({ setState }: StateContext<UserStateModel>, { payload }: SignUpAction) {
    return this.signUpGQL.mutate({
      email: payload.email,
      password: payload.password,
      confirmToken: payload.confirmToken
    });
  }

  @Action(ChangeEmailAction)
  changeEmailAction({ dispatch }: StateContext<UserStateModel>, { payload }: ChangeEmailAction) {
    return this.authService.changeEmail(payload);
  }

  @Action(ChangePasswordAction)
  changePasswordAction({ dispatch }: StateContext<UserStateModel>, { payload }: ChangePasswordAction) {
    return this.authService.changePassword(payload);
  }

  @Action(ResetPasswordRequestAction)
  resetPasswordRequestAction({ dispatch }: StateContext<UserStateModel>, { payload }: ResetPasswordRequestAction) {
    return this.authService.sendResetPasswordEmail({
      email: payload.email,
      options: {
        redirectTo: `${window.location.origin}/auth/reset-password`
      }
    });
  }

  @Action(SendSignUpToken)
  sendVerificationLinkAction({ dispatch }: StateContext<UserStateModel>, { payload }: SendSignUpToken) {
    return this.sendSignupOtpGQL.mutate({ email: payload.email });
  }

  @Action(ResetPasswordAction)
  resetPasswordAction({ dispatch }: StateContext<UserStateModel>, { payload }: ResetPasswordAction) {
    return this.authService.resetPassword({
      ticket: payload.token,
      newPassword: payload.password
    });
  }
}
