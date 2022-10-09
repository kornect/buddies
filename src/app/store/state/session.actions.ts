import { SessionUser } from '@/app/store/models';

export class SignInAction {
  static readonly type = '[SignIn] sign in user';

  constructor(public payload: { email: string; password: string }) {}
}

export class SignOutAction {
  static readonly type = '[SignOut] sign out user';
}

export class SetUserAction {
  static readonly type = '[SetUser] set user';

  constructor(public payload: SessionUser | null) {}
}

// reload user session action
export class ReloadUserSessionAction {
  static readonly type = '[ReloadUserSession] reload user session';
}
