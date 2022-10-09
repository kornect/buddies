export class ProfileAction {
  static readonly type = '[Profile] Add item';

  constructor(public payload: string) {}
}

// get profile action
export class GetProfileAction {
  static readonly type = '[GetProfile] get profile';
}

// update profile action
export class UpdateProfileAction {
  static readonly type = '[UpdateProfile] update profile';

  constructor(public payload: any) {}
}

// add profile action
export class AddProfileAction {
  static readonly type = '[AddProfile] add profile';

  constructor(public payload: any) {}
}

// update profile location
export class UpdateLocationAction {
  static readonly type = '[UpdateProfileLocation] update profile location';

  constructor(public payload: any) {}
}
