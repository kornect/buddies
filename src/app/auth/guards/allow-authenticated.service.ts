import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { from, of, switchMap } from 'rxjs';
import { AuthService } from '@/app/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthorizeGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.redirectIfLoggedIn(next, state);
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.redirectIfLoggedIn(next, state);
  }

  private redirectIfLoggedIn(_: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return from(this.authService.isAuthenticatedAsync()).pipe(
      switchMap((isAuthenticated) => {
        if (!isAuthenticated) {
          this.router
            .navigate(['sign-in'], {
              queryParams: {
                r: state.url
              },
              replaceUrl: true,
              relativeTo: this.route.root
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
