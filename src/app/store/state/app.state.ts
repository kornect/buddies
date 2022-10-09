import { Injectable } from '@angular/core';

import { Action, Selector, State, StateContext } from '@ngxs/store';

import { NHostService } from '@/app/common/nhost';
import { AppTheme, ThemeService } from '@/app/common/theme';
import { BaseState } from '@/app/store/state/base.state';

import { InitThemeAction, SetThemeAction, ToggleThemeAction } from './app.actions';


export interface AppStateModel {
  theme: AppTheme;
}

const defaults = {
  theme: AppTheme.Light,
};

@State<AppStateModel>({
  name: 'app',
  defaults,
})
@Injectable()
export class AppState extends BaseState {
  constructor(private hostService: NHostService, private themeService: ThemeService) {
    super(hostService);
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
}
