export class InitializeAuthAction {
  static readonly type = '[Auth] Initialize';
}

export class SignInAction {
  static readonly type = '[SignIn] sign in user';

  constructor(public payload: { email: string; password: string }) {
  }
}

export class SignOutAction {
  static readonly type = '[SignOut] sign out user';
}

export class SetUserAction {
  static readonly type = '[SetUser] set user';

  constructor(public payload: any) {
  }
}

// reload user session action
export class ReloadUserSessionAction {
  static readonly type = '[ReloadUserSession] reload user session';
}

export class GetUserAction {
  static readonly type = '[User] Get User account';
}

// sign up action
export class SignUpAction {
  static readonly type = '[SignUp] sign up user';

  constructor(public payload: { email: string; password: string; confirmToken: string }) {
  }
}

// update display name action
export class UpdateDisplayNameAction {
  static readonly type = '[UpdateDisplayName] update display name';

  constructor(public payload: { displayName: string }) {
  }
}

// change email action
export class ChangeEmailAction {
  static readonly type = '[ChangeEmail] change email';

  constructor(public payload: { email: string; password: string }) {
  }
}

// change password
export class ChangePasswordAction {
  static readonly type = '[ChangePassword] change password';

  constructor(public payload: { currentPassword: string, password: string }) {
  }
}

// reset password request action
export class ResetPasswordRequestAction {
  static readonly type = '[ResetPasswordRequest] reset password request';

  constructor(public payload: { email: string }) {
  }
}

// reset password action
export class ResetPasswordAction {
  static readonly type = '[ResetPassword] reset password';

  constructor(public payload: { password: string; token: string }) {
  }
}

// update photo url action
export class UpdatePhotoUrlAction {
  static readonly type = '[UpdatePhotoUrl] update photo url';

  constructor(public payload: { photoUrl: string }) {
  }
}

// send verification link action
export class SendSignUpToken {
  static readonly type = '[SendSignUpToken] send verification link';

  constructor(public payload: { email: string }) {
  }
}

export class CheckUsernameAction {
  static readonly type = '[CheckUsername] check username';

  constructor(public payload: { email: string }) {
  }
}

export class VerifySignUpToken {
  static readonly type = '[VerifySignUpToken] verify verification link';

  constructor(public payload: { email: string; token: string }) {
  }
}

// delete account action
export class DeleteAccountAction {
  static readonly type = '[DeleteAccount] delete account';

  constructor(public payload: { password: string }) {
  }
}
