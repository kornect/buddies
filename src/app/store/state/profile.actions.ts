export class ProfileAction {
  static readonly type = '[Profile] Add item';

  constructor(public payload: string) {
  }
}

// get profile action
export class GetProfileAction {
  static readonly type = '[GetProfile] get profile';
}

// update profile action
export class UpdateProfileAction {
  static readonly type = '[UpdateProfile] update profile';

  constructor(public payload: any) {
  }
}

export class UpdateProfileBioAction {
  static readonly type = '[UpdateProfileBio] update profile bio';

  constructor(public payload: any) {
  }
}

export class InsertProfileAction {
  static readonly type = '[InsertProfile] insert profile';

  constructor(public payload: { dateOfBirth: Date; gender: string; seekingGender: string }) {
  }
}

// update profile location
export class UpdateLocationAction {
  static readonly type = '[UpdateProfileLocation] update profile location';

  constructor(public payload: any) {
  }
}
