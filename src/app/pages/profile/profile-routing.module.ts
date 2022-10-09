import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      {
        path: 'overview',
        loadChildren: async () => (await import('./overview/overview.module')).OverviewModule,
      },
      { path: 'photos', loadChildren: async () => (await import('./photos/photos.module')).PhotosModule },
      {
        path: 'preferences',
        loadChildren: async () => (await import('./preferences/preferences.module')).PreferencesModule,
      },
      { path: 'billing', loadChildren: async () => (await import('../billing/billing.module')).BillingModule },
      { path: 'settings', loadChildren: async () => (await import('../account/account.module')).AccountModule },
      { path: '**', redirectTo: 'overview' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
