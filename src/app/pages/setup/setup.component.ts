import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { environment } from 'env';

import { UserProfileService } from 'domain/services/profile';
import { UserService } from 'domain/services/user';
import { UserState } from 'domain/state';


@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss'],
})
export class SetupComponent implements OnInit {
  steps = [
    { title: 'Verify Email', subtitle: 'Verify your account' },
    { title: 'Profile Details', subtitle: 'Add profile details' },
    { title: 'Upload Photos', subtitle: 'Upload profile photos' },
    { title: 'Set Location', subtitle: 'Set your location' },
  ] as Array<{ title: string; subtitle: string }>;

  activeStep = -1;
  loading = false;
  user$ = this.userState.user$;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userState: UserState,
    private userService: UserService,
    private userProfileService: UserProfileService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.userProfileService.getProfile().subscribe(() => {
      this.nextStep();
    });
  }

  onLogout() {
    this.userService.signOut().subscribe(() => {
      this.router.navigate([environment.appUrls.landing]).then();
    });
  }

  getCurrentStep() {
    return this.steps[this.activeStep];
  }

  nextStep() {
    this.loading = true;
    setTimeout(() => {
      if (!this.userService.isVerified()) {
        this.activeStep = 0;
      } else if (!this.userProfileService.hasProfile()) {
        this.activeStep = 1;
      } else if (!this.userProfileService.hasLocation()) {
        this.activeStep = 2;
      } else if (!this.userService.hasAvatar()) {
        this.activeStep = 3;
      } else if (this.activeStep === 3) {
        this.activeStep = 4;
      } else {
        this.router.navigate([environment.appUrls.home]).then();
      }
      this.loading = false;
    }, 500);
  }
}
