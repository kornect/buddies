import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Data, NavigationEnd, Router } from '@angular/router';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject, tap } from 'rxjs';

export interface Breadcrumb {
  label: string;
  url: string;
}

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
export class BreadcrumbsService {
  private readonly _breadcrumbs$ = new BehaviorSubject<Breadcrumb[]>([]);
  readonly breadcrumbs$ = this._breadcrumbs$.asObservable();

  constructor(private router: Router) {
    this.router.events
      .pipe(
        untilDestroyed(this),
        tap((event) => {
          if (event instanceof NavigationEnd) {
            const root = this.router.routerState.snapshot.root;
            const breadcrumbs: Breadcrumb[] = [];
            this.buildBreadcrumbs(root, [], breadcrumbs);

            // Emit the new hierarchy
            this._breadcrumbs$.next(breadcrumbs);
          }
        })
      )
      .subscribe();
  }

  private buildBreadcrumbs(route: ActivatedRouteSnapshot | null, parentUrl: string[], breadcrumbs: Breadcrumb[]) {
    if (route) {
      // Construct the route URL
      const routeUrl = parentUrl.concat(route.url.map((url) => url.path));

      // Add an element for the current route part
      if (route.data['breadcrumb']) {
        const breadcrumb = {
          label: this.getLabel(route.data),
          url: '/' + routeUrl.join('/'),
        };
        breadcrumbs.push(breadcrumb);
      }

      // Add another element for the next route part
      this.buildBreadcrumbs(route.firstChild, routeUrl, breadcrumbs);
    }
  }

  private getLabel(data: Data) {
    // The breadcrumb can be defined as a static string or as a function to construct the breadcrumb element out of the route data
    return typeof data['breadcrumb'] === 'function' ? data['breadcrumb'](data) : data['breadcrumb'] || '';
  }
}
