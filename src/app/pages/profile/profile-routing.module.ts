import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DeleteAccountComponent } from '@/app/pages/profile/forms/delete-account/delete-account.component';
import { UpdateEmailComponent } from '@/app/pages/profile/forms/update-email/update-email.component';
import { UpdatePasswordComponent } from '@/app/pages/profile/forms/update-password/update-password.component';
import {
  UpdatePhoneNumberComponent
} from '@/app/pages/profile/forms/update-phone-number/update-phone-number.component';
import {
  UpdateRelationshipPreferenceComponent
} from '@/app/pages/profile/forms/update-relationship-preference/update-relationship-preference.component';
import { ProfileComponent } from '@/app/pages/profile/profile.component';

import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { UpdateBioComponent } from './forms/update-bio/update-bio.component';
import { UpdateDisplayNameComponent } from './forms/update-display-name/update-display-name.component';
import { UpdateLocationComponent } from './forms/update-location/update-location.component';
import { UpdatePhotosComponent } from './forms/update-photos/update-photos.component';
import { UploadPhotoComponent } from './forms/upload-photo/upload-photo.component';
import { UpdateSexualityComponent } from '@/app/pages/profile/forms/update-sexuality/update-sexuality.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    data: {
      breadcrumbs: 'My Profile'
    },
    children: [
      { path: '', redirectTo: 'details', pathMatch: 'full' },
      { path: 'details', component: ProfileDetailsComponent },
      {
        path: 'edit',
        data: { breadcrumbs: 'Edit' },
        children: [
          { path: 'name', data: { breadcrumbs: 'Update name' }, component: UpdateDisplayNameComponent },
          { path: 'bio', data: { breadcrumbs: 'Update bio' }, component: UpdateBioComponent },
          { path: 'location', data: { breadcrumbs: 'Update location' }, component: UpdateLocationComponent },
          {
            path: 'preferences',
            data: { breadcrumbs: 'Update preferences' },
            component: UpdateRelationshipPreferenceComponent
          },
          { path: 'sexuality', data: { breadcrumbs: 'Update sexuality' }, component: UpdateSexualityComponent },
          { path: 'photos', data: { breadcrumbs: 'Update photos' }, component: UpdatePhotosComponent },
          { path: 'photos/upload', data: { breadcrumbs: 'Upload photo' }, component: UploadPhotoComponent },
          {
            path: 'account',
            data: { breadcrumbs: 'account' },
            children: [
              { path: 'password', data: { breadcrumbs: 'Update password' }, component: UpdatePasswordComponent },
              { path: 'email', data: { breadcrumbs: 'Update email' }, component: UpdateEmailComponent },
              { path: 'phone', data: { breadcrumbs: 'Update phone number' }, component: UpdatePhoneNumberComponent },
              { path: 'delete', data: { breadcrumbs: 'Delete Account' }, component: DeleteAccountComponent }
            ]
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {
}
