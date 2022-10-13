import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from '@/app/pages/profile/profile.component';

import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { UpdateBioComponent } from './forms/update-bio/update-bio.component';
import { UpdateDetailsComponent } from './forms/update-details/update-details.component';
import { UpdateDisplayNameComponent } from './forms/update-display-name/update-display-name.component';
import { UpdateLocationComponent } from './forms/update-location/update-location.component';
import { UpdatePhotosComponent } from './forms/update-photos/update-photos.component';
import { UploadPhotoComponent } from './forms/upload-photo/upload-photo.component';
import {
  UpdatePhoneNumberComponent
} from '@/app/pages/profile/forms/update-phone-number/update-phone-number.component';
import { UpdatePasswordComponent } from '@/app/pages/profile/forms/update-password/update-password.component';
import { UpdateEmailComponent } from '@/app/pages/profile/forms/update-email/update-email.component';
import { DeleteAccountComponent } from '@/app/pages/profile/forms/delete-account/delete-account.component';


const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      { path: '', redirectTo: 'details', pathMatch: 'full' },
      { path: 'details', component: ProfileDetailsComponent },
      {
        path: 'edit',
        children: [
          { path: 'name', component: UpdateDisplayNameComponent },
          { path: 'bio', component: UpdateBioComponent },
          { path: 'details', component: UpdateDetailsComponent },
          { path: 'location', component: UpdateLocationComponent },
          { path: 'photos', component: UpdatePhotosComponent },
          { path: 'photos/upload', component: UploadPhotoComponent },
          {
            path: 'account',
            children: [
              { path: 'password', component: UpdatePasswordComponent },
              { path: 'email', component: UpdateEmailComponent },
              { path: 'phone', component: UpdatePhoneNumberComponent },
              { path: 'delete', component: DeleteAccountComponent }
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
