import { Injectable } from '@angular/core';

import { StorageService } from '@/app/common/storage';
import { isNullOrUndefined } from '@/app/utils';

export enum AppTheme {
  Light = 'light',
  Dark = 'dark',
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(private storageService: StorageService) {}

  init() {
    const deviceMode = window.matchMedia('(prefers-color-scheme: dark)');
    const theme = this.getTheme();

    if (!isNullOrUndefined(theme)) {
      this.setTheme(theme);
    } else {
      this.setTheme(deviceMode.matches ? AppTheme.Dark : AppTheme.Light);
    }
  }

  isDarkTheme(): boolean {
    return this.getTheme() === AppTheme.Dark;
  }

  getTheme(): AppTheme {
    return this.storageService.get('theme') as AppTheme;
  }

  setTheme(theme: AppTheme) {
    this.storageService.set('theme', theme);

    // set document html class
    document.documentElement.className = theme;
  }
}
