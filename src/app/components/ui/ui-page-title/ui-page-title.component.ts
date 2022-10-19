import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AppState } from '@/app/store/state';
import { Breadcrumb } from '@exalif/ngx-breadcrumbs';

@UntilDestroy()
@Component({
  selector: 'app-ui-page-title',
  templateUrl: './ui-page-title.component.html',
  styleUrls: ['./ui-page-title.component.scss']
})
export class UiPageTitleComponent implements OnInit {
  title = '';
  breadcrumbs: Breadcrumb[] = [];

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.select(AppState.breadcrumbs).pipe(untilDestroyed(this)).subscribe((breadcrumbs) => {
      this.breadcrumbs = breadcrumbs;

      if (breadcrumbs.length > 0) {
        this.title = breadcrumbs[breadcrumbs.length - 1].text;
      }
    });
  }
}
