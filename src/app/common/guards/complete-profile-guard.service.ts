import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot
} from '@angular/router';

import { Store } from '@ngxs/store';
import { from, of, switchMap } from 'rxjs';

import { NHostService } from '@/app/common/nhost';
import { PhotosState, ProfileState, SessionState } from '@/app/store/state';

@Injectable({
  providedIn: 'root'
})
export class CompleteProfileGuard implements CanActivate, CanActivateChild {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private nhostService: NHostService,
    private store: Store
  ) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.redirectIfLoggedIn(next, state);
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.redirectIfLoggedIn(next, state);
  }

  private isVerified() {
    return this.store.selectSnapshot(SessionState.isVerified);
  }

  private completedProfile() {
    return this.store.selectSnapshot(ProfileState.completedProfile);
  }

  private uploadedAvatar() {
    return this.store.selectSnapshot(PhotosState.uploadedAvatar);
  }

  private isComplete() {
    return this.isVerified() && this.completedProfile() && this.uploadedAvatar();
  }

  private redirectIfLoggedIn(_: ActivatedRouteSnapshot, __: RouterStateSnapshot) {
    return from(this.nhostService.auth.isAuthenticatedAsync()).pipe(
      switchMap((isAuthenticated) => {
        if (isAuthenticated) {
          if (!this.isComplete()) {
            this.router.navigate(['profile'], { replaceUrl: true, relativeTo: this.route.root }).then();
            return of(false);
          }
          return of(true);
        } else {
          return of(true);
        }
      })
    );
  }
}
