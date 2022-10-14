import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UntilDestroy } from '@ngneat/until-destroy';
import { Select, Store } from '@ngxs/store';
import { Observable, tap } from 'rxjs';

import { AppTheme } from '@/app/common/theme';
import { User } from '@/app/store/models';
import { AppState, SignOutAction, ToggleThemeAction, UserState } from '@/app/store/state';


@UntilDestroy()
@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent implements OnInit {
  @Select(UserState.user) user$!: Observable<User | null>;
  @Select(AppState.theme) theme$!: Observable<AppTheme>;

  constructor(private router: Router, private route: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {}

  changeTheme() {
    this.store.dispatch(new ToggleThemeAction());
  }

  onLogout() {
    this.store
      .dispatch(new SignOutAction())
      .pipe(tap(() => this.router.navigate([''], { relativeTo: this.route })))
      .subscribe();
  }

  getYear() {
    return new Date().getFullYear();
  }
}
