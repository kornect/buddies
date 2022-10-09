import { Routes } from '@angular/router';

import { PublicGuard } from '@/app/common/guards';

export const APP_ROUTES: Routes = [
  {
    path: '',
    canActivate: [PublicGuard],
    loadChildren: async () => (await import('./pages/home')).HomeModule,
  },
  { path: 'sign-in', loadChildren: async () => (await import('./pages/sign-in')).SignInModule },
  { path: 'sign-up', loadChildren: async () => (await import('./pages/sign-up')).SignUpModule },
  {
    path: 'forgot-password',
    loadChildren: async () => (await import('./pages/forgot-password')).ForgotPasswordModule,
  },
  {
    path: 'reset-password',
    loadChildren: async () => (await import('./pages/reset-password')).ResetPasswordModule,
  },
  { path: 'verify-email', loadChildren: async () => (await import('./pages/verify-email')).VerifyEmailModule },
  /*
  {
    path: 'setup',
    canActivate: [ProtectedGuard],
    loadChildren: async () => (await import('./pages/setup')).SetupModule,
  },
  {
    path: 'member',
    component: DefaultLayoutComponent,
    canActivate: [ProtectedGuard],
    children: [
      { path: '', redirectTo: 'search', pathMatch: 'full' },
      {
        path: 'search',
        loadChildren: async () => (await import('./pages/members')).MembersModule,
      },
      {
        path: 'profile',
        loadChildren: async () => (await import('./pages/profile')).ProfileModule,
      },
      {
        path: 'account',
        loadChildren: async () => (await import('./pages/account')).AccountModule,
      },
    ],
  }, */
  {
    path: 'sign-in',
    redirectTo: 'auth/sign-in',
  },
  {
    path: 'sign-up',
    redirectTo: 'auth/sign-up',
  },
  {
    path: '**',
    redirectTo: 'members',
  },
];
