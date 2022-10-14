import { Component, OnInit } from '@angular/core';

import { Store } from '@ngxs/store';

import { PhotosState, ProfileState, UserState } from '@/app/store/state';


@Component({
  selector: 'app-complete-profile-message',
  templateUrl: './complete-profile-message.component.html',
  styleUrls: ['./complete-profile-message.component.scss'],
})
export class CompleteProfileMessageComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}

  isVerified() {
    return this.store.selectSnapshot(UserState.isComplete);
  }

  completedProfile() {
    return this.store.selectSnapshot(ProfileState.completedProfile);
  }

  uploadedAvatar() {
    return this.store.selectSnapshot(PhotosState.uploadedAvatar);
  }

  isComplete() {
    return this.isVerified() && this.completedProfile() && this.uploadedAvatar();
  }
}
