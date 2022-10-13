import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { AppTheme } from '@/app/common/theme';


@Component({
  selector: 'app-ui-theme-switcher, [app-ui-theme-switcher]',
  templateUrl: './ui-theme-switcher.component.html',
  styleUrls: ['./ui-theme-switcher.component.scss'],
})
export class UiThemeSwitcherComponent implements OnInit {
  @Input() iconOnly = false;
  @Input() theme: AppTheme | undefined | null = AppTheme.Light;
  @Output() onChanged = new EventEmitter<AppTheme>();

  constructor() {}

  get isDarkTheme(): boolean {
    return this.theme === AppTheme.Dark;
  }

  emitLightTheme() {
    this.onChanged.emit(AppTheme.Light);
  }

  emitDarkTheme() {
    this.onChanged.emit(AppTheme.Dark);
  }

  ngOnInit(): void {}
}
