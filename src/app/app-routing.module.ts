import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProtectedGuard, PublicGuard } from 'core/guards';

import { LandingPageComponent } from './shell/pages/landing-page/landing-page.component';
import { ShellComponent } from './shell/shell.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent, canActivate: [PublicGuard] },
  {
    path: '',
    component: ShellComponent,
    canActivate: [ProtectedGuard],
    data: { breadcrumb: 'Home' },
    children: [
      { path: '', redirectTo: 'members', pathMatch: 'full' },
      {
        path: 'members',
        data: { breadcrumb: 'Members' },
        loadChildren: async () => (await import('./features/member-home')).MemberHomeModule,
      },
      {
        path: 'profile',
        data: { breadcrumb: 'Profile' },
        loadChildren: async () => (await import('./features/profile')).ProfileModule,
      },
      {
        path: 'account',
        data: { breadcrumb: 'Account' },
        loadChildren: async () => (await import('./features/member-account')).MemberAccountModule,
      },
    ],
  },
  {
    path: 'login',
    canActivate: [PublicGuard],
    loadChildren: async () => (await import('./features/login')).LoginModule,
  },
  {
    path: 'register',
    canActivate: [PublicGuard],
    loadChildren: async () => (await import('./features/register')).RegisterModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
