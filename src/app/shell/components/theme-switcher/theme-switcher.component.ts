import { Component, OnInit } from '@angular/core';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ThemeService } from 'core/services/theme';
import { Theme } from 'core/services/theme/theme.service';
import { tap } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-theme-switcher, [app-theme-switcher]',
  templateUrl: './theme-switcher.component.html',
  styles: [':host { display:contents; width: 100%; }'],
})
export class ThemeSwitcherComponent implements OnInit {
  isDark!: boolean;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.isDark = this.themeService.isDarkTheme();
    this.themeService.theme$
      .pipe(
        untilDestroyed(this),
        tap((theme) => (this.isDark = theme === Theme.Dark))
      )
      .subscribe();
  }

  changeTheme() {
    this.themeService.setTheme(this.isDark ? Theme.Light : Theme.Dark);
  }
}
