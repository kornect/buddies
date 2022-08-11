import { Component, OnInit } from '@angular/core';

import { Breadcrumb, BreadcrumbsService } from 'core/services/breadcrumbs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit {
  breadcrumbs$: Observable<Breadcrumb[]>;

  constructor(private breadcrumbService: BreadcrumbsService) {
    this.breadcrumbs$ = this.breadcrumbService.breadcrumbs$;
  }

  ngOnInit(): void {}
}
