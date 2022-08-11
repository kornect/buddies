import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { UiLogoModule } from 'shared/ui/ui-logo';
import { UiStickyModule } from 'shared/ui/ui-sticky';

import { CurrentUserComponent } from './components/current-user/current-user.component';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MemberLayoutComponent } from './layouts/member-layout/member-layout.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ShellComponent } from './shell.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    MemberLayoutComponent,
    PublicLayoutComponent,
    AdminLayoutComponent,
    ShellComponent,
    CurrentUserComponent,
    ThemeSwitcherComponent,
    BreadcrumbsComponent,
  ],
  imports: [CommonModule, RouterModule, UiLogoModule, UiStickyModule, NzDropDownModule, NzBadgeModule],
  exports: [LandingPageComponent, MemberLayoutComponent, PublicLayoutComponent, AdminLayoutComponent],
})
export class ShellModule {}
