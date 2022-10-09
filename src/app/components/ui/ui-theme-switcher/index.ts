import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UiThemeSwitcherComponent } from './ui-theme-switcher.component';


@NgModule({
  declarations: [UiThemeSwitcherComponent],
  imports: [CommonModule],
  exports: [UiThemeSwitcherComponent],
})
export class UiThemeSwitcherModule {}
