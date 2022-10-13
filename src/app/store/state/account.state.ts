import { Injectable } from '@angular/core';

import { Action, State, StateContext } from '@ngxs/store';
import gql from 'graphql-tag';

import { NHostService } from '@/app/common/nhost';
import { DELETE_USER, UPDATE_AVATAR, UPDATE_DISPLAY_NAME, UPDATE_PHONE_NUMBER } from '@/app/store/graphql';
import { BaseState } from '@/app/store/state/base.state';
import { ReloadUserSessionAction } from '@/app/store/state/session.actions';

import {
  ChangeEmailAction,
  ChangePasswordAction,
  DeleteAccountAction,
  ResetPasswordAction,
  ResetPasswordRequestAction,
  SendVerificationLinkAction,
  SignUpAction,
  UpdateDisplayNameAction,
  UpdatePhoneNumberAction,
  UpdatePhotoUrlAction
} from './account.actions';

export class AccountStateModel {
}

const defaults = {};

@State<AccountStateModel>({
  name: 'account',
  defaults
})
@Injectable()
export class AccountState extends BaseState {
  constructor(private hostService: NHostService) {
    super(hostService);
  }

  @Action(SignUpAction)
  signUpAction({ setState }: StateContext<AccountStateModel>, { payload }: SignUpAction) {
    return this.withObservable(async () => {
      const { error } = await this.hostService.auth.signUp({
        email: payload.email,
        password: payload.password,
        options: {
          redirectTo: `${window.location.origin}/auth/verify-email`,
          metadata: {
            acceptedTerms: payload.acceptedTerms
          }
        }
      });

      if (error) {
        throw new Error(error.message);
      }
    });
  }

  @Action(UpdateDisplayNameAction)
  updateDisplayNameAction({ dispatch }: StateContext<AccountStateModel>, { payload }: UpdateDisplayNameAction) {
    return this.withObservable(async () => {
      const { error } = await this.hostService.graphql.request(gql(UPDATE_DISPLAY_NAME), {
        id: this.getUserId(),
        ...payload
      });

      if (error) {
        this.handleError(error, 'Failure updating display name');
      }

      dispatch(new ReloadUserSessionAction());
    });
  }

  @Action(UpdatePhoneNumberAction)
  updatePhoneNumberAction({ dispatch }: StateContext<AccountStateModel>, { payload }: UpdatePhoneNumberAction) {
    return this.withObservable(async () => {
      const { error } = await this.hostService.graphql.request(UPDATE_PHONE_NUMBER, {
        id: this.getUserId(),
        ...payload
      });

      if (error) {
        throw new Error('Failure updating phone number');
      }

      dispatch(new ReloadUserSessionAction());
    });
  }

  @Action(ChangeEmailAction)
  changeEmailAction({ dispatch }: StateContext<AccountStateModel>, { payload }: ChangeEmailAction) {
    return this.withObservable(async () => {
      const { error } = await this.hostService.auth.changeEmail({
        newEmail: payload.email
      });

      if (error) {
        throw new Error(error.message || 'Failure changing email');
      }

      dispatch(new ReloadUserSessionAction());
    });
  }

  @Action(ChangePasswordAction)
  changePasswordAction({ dispatch }: StateContext<AccountStateModel>, { payload }: ChangePasswordAction) {
    return this.withObservable(async () => {
      const { error } = await this.hostService.auth.changePassword({
        newPassword: payload.password
      });

      if (error) {
        throw new Error(error.message);
      }
    });
  }

  @Action(ResetPasswordRequestAction)
  resetPasswordRequestAction({ dispatch }: StateContext<AccountStateModel>, { payload }: ResetPasswordRequestAction) {
    return this.withObservable(async () => {
      const { error } = await this.hostService.auth.resetPassword({
        email: payload.email,
        options: {
          redirectTo: `${window.location.origin}/auth/reset-password`
        }
      });

      if (error) {
        throw new Error(error.message || 'Failure resetting password');
      }
    });
  }

  @Action(UpdatePhotoUrlAction)
  updatePhotoUrlAction({ dispatch }: StateContext<AccountStateModel>, { payload }: UpdatePhotoUrlAction) {
    return this.withObservable(async () => {
      const { error } = await this.hostService.graphql.request(UPDATE_AVATAR, {
        id: this.getUserId(),
        avatarUrl: payload.photoUrl
      });

      if (error) {
        throw new Error('Failure updating avatar');
      }

      dispatch(new ReloadUserSessionAction());
    });
  }

  @Action(SendVerificationLinkAction)
  sendVerificationLinkAction({ dispatch }: StateContext<AccountStateModel>, { payload }: SendVerificationLinkAction) {
    return this.withObservable(async () => {
      const { error } = await this.hostService.auth.sendVerificationEmail({
        email: payload.email
      });

      if (error) {
        throw new Error('Failure sending verification email');
      }
    });
  }

  @Action(ResetPasswordAction)
  resetPasswordAction({ dispatch }: StateContext<AccountStateModel>, { payload }: ResetPasswordAction) {
    return this.withObservable(async () => {
      const { error } = await this.hostService.auth.changePassword({
        ticket: payload.token,
        newPassword: payload.password
      });

      if (error) {
        throw new Error(error.message || 'Failure confirming password');
      }
    });
  }

  @Action(DeleteAccountAction)
  deleteAccountAction({ dispatch }: StateContext<AccountStateModel>, { payload }: DeleteAccountAction) {
    return this.withObservable(async () => {
      const user = await this.hostService.auth.getUser();

      if (!user) {
        throw new Error('User not found');
      }

      const { error } = await this.hostService.auth.signIn({
        email: user?.email || '',
        password: payload.password
      });

      if (error) {
        throw new Error(error.message || 'Failure confirming password');
      }

      const { error: deleteError } = await this.hostService.graphql.request(DELETE_USER, { id: this.getUserId() });

      if (deleteError) {
        throw new Error('Failure deleting account, please try again later');
      }
    });
  }
}
