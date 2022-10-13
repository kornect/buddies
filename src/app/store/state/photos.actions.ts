// get photos action
export class GetPhotosAction {
  static readonly type = '[GetPhotos] get photos';
}

// get avatar action
export class GetAvatarAction {
  static readonly type = '[GetAvatarAction] get avatar url';
}

// upload photo action
export class UploadPhotoAction {
  static readonly type = '[UploadPhoto] upload photo';

  constructor(public payload: { file: File }) {}
}

export class UploadAvatarAction {
  static readonly type = '[UploadAvatar] upload avatar';

  constructor(public payload: { file: File }) {}
}
