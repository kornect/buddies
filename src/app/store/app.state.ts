import { Injectable } from '@angular/core';

import { Action, Selector, State, StateContext, Store } from '@ngxs/store';

import { NhostService } from '@/app/common/nhost';
import { AppTheme, ThemeService } from '@/app/common/theme';
import { BaseState } from '@/app/store/base.state';

import { InitThemeAction, SetBreadcrumbsAction, SetThemeAction, ToggleThemeAction } from './app.actions';
import { Breadcrumb, BreadcrumbsService } from '@exalif/ngx-breadcrumbs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { tap } from 'rxjs';

export interface AppStateModel {
  theme: AppTheme;
  breadcrumbs: Breadcrumb[];
}

const defaults = {
  theme: AppTheme.Light,
  breadcrumbs: []
};

@State<AppStateModel>({
  name: 'app',
  defaults
})
@UntilDestroy()
@Injectable()
export class AppState extends BaseState {
  constructor(
    private hostService: NhostService,
    private themeService: ThemeService,
    private breadcrumbsService: BreadcrumbsService,
    private store: Store
  ) {
    super(hostService);

    this.breadcrumbsService.crumbs$.pipe(
      untilDestroyed(this),
      tap((breadcrumbs) => {
        this.store.dispatch(new SetBreadcrumbsAction({ breadcrumbs }));
      })).subscribe();
  }

  @Selector()
  static breadcrumbs(state: AppStateModel) {
    return state.breadcrumbs;
  }

  @Selector()
  static theme(state: AppStateModel) {
    return state.theme;
  }

  @Action(InitThemeAction)
  initThemeAction({ patchState }: StateContext<AppStateModel>) {
    this.themeService.init();
    patchState({ theme: this.themeService.getTheme() });
  }

  @Action(ToggleThemeAction)
  toggleThemeAction({ patchState }: StateContext<AppStateModel>) {
    const theme = this.themeService.isDarkTheme() ? AppTheme.Light : AppTheme.Dark;
    this.themeService.setTheme(theme);

    patchState({ theme: this.themeService.getTheme() });
  }

  @Action(SetThemeAction)
  setThemeAction({ patchState }: StateContext<AppStateModel>, { payload }: SetThemeAction) {
    this.themeService.setTheme(payload.theme);

    patchState({ theme: this.themeService.getTheme() });
  }

  @Action(SetBreadcrumbsAction)
  setBreadcrumbsAction({ patchState }: StateContext<AppStateModel>, { payload }: SetBreadcrumbsAction) {
    patchState({ breadcrumbs: payload.breadcrumbs });
  }
}
