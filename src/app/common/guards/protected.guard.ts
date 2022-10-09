import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { from, of, switchMap } from 'rxjs';

import { NHostService } from '@/app/common/nhost';


@Injectable({
  providedIn: 'root',
})
export class ProtectedGuard implements CanActivate {
  constructor(private nhostService: NHostService, private router: Router, private route: ActivatedRoute) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.redirectIfLoggedIn(next, state);
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.redirectIfLoggedIn(next, state);
  }

  private redirectIfLoggedIn(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return from(this.nhostService.auth.isAuthenticatedAsync()).pipe(
      switchMap((isAuthenticated) => {
        if (!isAuthenticated) {
          this.router
            .navigate(['sign-in'], {
              queryParams: {
                r: state.url,
              },
              replaceUrl: true,
              relativeTo: this.route.root,
            })
            .then();

          return of(false);
        } else {
          return of(true);
        }
      })
    );
  }
}
