// sign up action
export class SignUpAction {
  static readonly type = '[SignUp] sign up user';

  constructor(public payload: { name: string; email: string; password: string; acceptedTerms: boolean }) {}
}

// update display name action
export class UpdateDisplayNameAction {
  static readonly type = '[UpdateDisplayName] update display name';

  constructor(public payload: { displayName: string }) {}
}

// update phone number action
export class UpdatePhoneNumberAction {
  static readonly type = '[UpdatePhoneNumber] update phone number';

  constructor(public payload: { phoneNumber: string }) {}
}

// change email action
export class ChangeEmailAction {
  static readonly type = '[ChangeEmail] change email';

  constructor(public payload: { email: string; password: string }) {}
}

// change password
export class ChangePasswordAction {
  static readonly type = '[ChangePassword] change password';

  constructor(public payload: { password: string; newPassword: string }) {}
}

// reset password request action
export class ResetPasswordRequestAction {
  static readonly type = '[ResetPasswordRequest] reset password request';

  constructor(public payload: { email: string }) {}
}

// reset password action
export class ResetPasswordAction {
  static readonly type = '[ResetPassword] reset password';

  constructor(public payload: { password: string; token: string }) {}
}

// update photo url action
export class UpdatePhotoUrlAction {
  static readonly type = '[UpdatePhotoUrl] update photo url';

  constructor(public payload: { photoUrl: string }) {}
}

// send verification link action
export class SendVerificationLinkAction {
  static readonly type = '[SendVerificationLink] send verification link';

  constructor(public payload: { email: string }) {}
}

// delete account action
export class DeleteAccountAction {
  static readonly type = '[DeleteAccount] delete account';

  constructor(public payload: { password: string }) {}
}
