import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { User } from '@/app/store/models';
import { PhotosState, ProfileState, SignOutAction, UserState } from '@/app/store/state';


@Component({
  selector: 'app-complete-profile',
  templateUrl: './complete-profile.component.html',
  styleUrls: ['./complete-profile.component.scss'],
})
export class CompleteProfileComponent implements OnInit {
  @Select(UserState.user) user$!: Observable<User>;
  steps = [
    { title: 'Verify Email', subtitle: 'Verify your account' },
    { title: 'Profile Details', subtitle: 'Add profile details' },
    { title: 'Upload Photos', subtitle: 'Upload profile photos' },
    { title: 'Set Location', subtitle: 'Set your location' },
  ] as Array<{ title: string; subtitle: string }>;

  activeStep = -1;
  loading = false;

  constructor(private router: Router, private route: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    this.nextStep();
  }

  onLogout() {
    this.store.dispatch(new SignOutAction());
  }

  getCurrentStep() {
    return this.steps[this.activeStep];
  }

  nextStep() {
    this.loading = true;
    if (!this.isVerified()) {
      this.activeStep = 0;
    } else if (!this.completedProfile()) {
      this.activeStep = 1;
    } else if (!this.uploadedAvatar()) {
      this.activeStep = 2;
    } else if (this.activeStep === 2) {
      this.activeStep = 3;
    } else {
      this.router.navigate(['home']).then();
    }
    this.loading = false;
  }

  isVerified() {
    return this.store.selectSnapshot(UserState.isComplete);
  }

  completedProfile() {
    return this.store.selectSnapshot(ProfileState.completedProfile);
  }

  uploadedAvatar() {
    return this.store.selectSnapshot(PhotosState.uploadedAvatar);
  }
}
