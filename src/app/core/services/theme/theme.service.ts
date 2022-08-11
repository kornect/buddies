import { Injectable } from '@angular/core';

import { StorageService } from 'core/services/storage';
import { isNullOrUndefined } from 'core/utils';
import { BehaviorSubject, Subject } from 'rxjs';

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _theme = new BehaviorSubject<Theme>(Theme.Light);
  theme$ = this._theme.asObservable();

  constructor(private storageService: StorageService) {}

  init() {
    const deviceMode = window.matchMedia('(prefers-color-scheme: dark)');
    const theme = this.getTheme();

    if (!isNullOrUndefined(theme)) {
      this.setTheme(theme);
    } else {
      this.setTheme(deviceMode.matches ? Theme.Dark : Theme.Light);
    }
  }

  isDarkTheme(): boolean {
    return this.getTheme() === Theme.Dark;
  }

  getTheme(): Theme {
    return this.storageService.get('theme') as Theme;
  }

  setTheme(theme: Theme) {
    this.storageService.set('theme', theme);

    // set document html class
    document.documentElement.className = theme;

    this._theme.next(theme);
  }
}
