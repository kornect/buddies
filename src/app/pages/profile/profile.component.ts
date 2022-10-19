import { Component, OnInit } from '@angular/core';

import { Store } from '@ngxs/store';

import { GetLookupsAction } from '@/app/store/state';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  pageTitle = 'Profile';
  breadcrumbs = [];

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(new GetLookupsAction());
  }
}
