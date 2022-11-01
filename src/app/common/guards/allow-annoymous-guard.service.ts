import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot
} from '@angular/router';

import { from, of, switchMap } from 'rxjs';

import { NhostService } from '@/app/common/nhost';

@Injectable({
  providedIn: 'root'
})
export class AnonymousGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router, private route: ActivatedRoute, private nhostService: NhostService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.redirectIfLoggedIn(next, state);
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.redirectIfLoggedIn(next, state);
  }

  private redirectIfLoggedIn(_: ActivatedRouteSnapshot, __: RouterStateSnapshot) {
    return from(this.nhostService.auth.isAuthenticatedAsync()).pipe(
      switchMap((isAuthenticated) => {
        if (isAuthenticated) {
          this.router.navigate(['home']).then();

          return of(false);
        } else {
          return of(true);
        }
      })
    );
  }
}
