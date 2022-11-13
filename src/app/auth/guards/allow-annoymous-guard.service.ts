import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot
} from '@angular/router';

import { of, switchMap } from 'rxjs';
import { AuthService } from '@/app/auth';

@Injectable({
  providedIn: 'root'
})
export class AnonymousGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.redirectIfLoggedIn(next, state);
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.redirectIfLoggedIn(next, state);
  }

  private redirectIfLoggedIn(_: ActivatedRouteSnapshot, __: RouterStateSnapshot) {
    return this.authService.isAuthenticatedAsync().pipe(
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
