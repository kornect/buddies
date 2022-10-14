import { Routes } from '@angular/router';

import { AppLandingComponent } from '@/app/app-landing.component';
import { AnonymousGuard, AuthorizeGuard, CompleteProfileGuard } from '@/app/common/guards';
import { DefaultLayoutComponent } from '@/app/components/layouts/default-layout/default-layout.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    canActivate: [AnonymousGuard],
    component: AppLandingComponent,
  },
  {
    path: 'sign-in',
    canActivate: [AnonymousGuard],
    loadChildren: async () => (await import('./pages/sign-in')).SignInModule,
  },
  {
    path: 'sign-up',
    canActivate: [AnonymousGuard],
    loadChildren: async () => (await import('./pages/sign-up')).SignUpModule,
  },
  {
    path: 'forgot-password',
    canActivate: [AnonymousGuard],
    loadChildren: async () => (await import('./pages/forgot-password')).ForgotPasswordModule,
  },
  {
    path: 'reset-password',
    canActivate: [AnonymousGuard],
    loadChildren: async () => (await import('./pages/reset-password')).ResetPasswordModule,
  },
  { path: 'verify-email', loadChildren: async () => (await import('./pages/verify-email')).VerifyEmailModule },
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [AuthorizeGuard],
    children: [
      {
        path: 'home',
        canActivate: [CompleteProfileGuard],
        loadChildren: async () => (await import('./pages/home')).HomeModule,
      },
      {
        path: 'profile',
        loadChildren: async () => (await import('./pages/profile')).ProfileModule,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
