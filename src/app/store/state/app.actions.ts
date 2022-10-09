import { AppTheme } from '@/app/common/theme';

export class AppAction {
  static readonly type = '[App] Add item';

  constructor(public payload: string) {}
}

export class SetThemeAction {
  static readonly type = '[App] Set theme';

  constructor(public payload: { theme: AppTheme }) {}
}

export class InitThemeAction {
  static readonly type = '[App] Init theme';
}

export class ToggleThemeAction {
  static readonly type = '[App] Toggle theme';
}
