import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

import { UiCurrentUserModule } from '@/app/components/ui/ui-current-user';
import { UiLogoModule } from '@/app/components/ui/ui-logo';
import { UiThemeSwitcherModule } from '@/app/components/ui/ui-theme-switcher';

import { DefaultLayoutComponent } from './default-layout.component';


@NgModule({
  declarations: [DefaultLayoutComponent],
  exports: [DefaultLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzBadgeModule,
    NzDropDownModule,
    UiThemeSwitcherModule,
    UiLogoModule,
    UiCurrentUserModule,
    FontAwesomeModule,
  ],
})
export class DefaultLayoutModule {}
