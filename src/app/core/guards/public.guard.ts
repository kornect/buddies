import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { NHostService } from 'core/services/nhost';
import { from, of, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PublicGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router, private route: ActivatedRoute, private nhostService: NHostService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.redirectIfLoggedIn(next, state);
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.redirectIfLoggedIn(next, state);
  }

  private redirectIfLoggedIn(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return from(this.nhostService.auth.isAuthenticatedAsync()).pipe(
      switchMap((isAuthenticated) => {
        if (isAuthenticated) {
          this.router.navigate(['/members']).then();

          return of(false);
        } else return of(true);
      })
    );
  }
}
