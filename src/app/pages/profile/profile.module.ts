import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';

import { CommonImports } from '@/app/pages/common-imports';

import {
  CompleteProfileMessageComponent
} from './components/complete-profile-message/complete-profile-message.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { RequiredTagComponent } from './components/required-tag/required-tag.component';
import { UpdateBioComponent } from './forms/update-bio/update-bio.component';
import { UpdateDetailsComponent } from './forms/update-details/update-details.component';
import { UpdateDisplayNameComponent } from './forms/update-display-name/update-display-name.component';
import { UpdateLocationComponent } from './forms/update-location/update-location.component';
import { UpdatePhotosComponent } from './forms/update-photos/update-photos.component';
import { UploadPhotoComponent } from './forms/upload-photo/upload-photo.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { FormsEditComponent } from './components/forms-edit/forms-edit.component';
import { UpdateEmailComponent } from './forms/update-email/update-email.component';
import { UpdatePasswordComponent } from './forms/update-password/update-password.component';
import { UpdatePhoneNumberComponent } from './forms/update-phone-number/update-phone-number.component';
import { DeleteAccountComponent } from './forms/delete-account/delete-account.component';
import { UpdateRelationshipPreferenceComponent } from './forms/update-relationship-preference/update-relationship-preference.component';


@NgModule({
  declarations: [
    ProfileComponent,
    UpdateDisplayNameComponent,
    UpdateDetailsComponent,
    UpdateLocationComponent,
    UploadPhotoComponent,
    UpdateBioComponent,
    UpdatePhotosComponent,
    ProfileDetailsComponent,
    CompleteProfileMessageComponent,
    RequiredTagComponent,
    FormsEditComponent,
    UpdateEmailComponent,
    UpdatePasswordComponent,
    UpdatePhoneNumberComponent,
    DeleteAccountComponent,
    UpdateRelationshipPreferenceComponent,
  ],
  imports: [CommonModule, ProfileRoutingModule, ...CommonImports,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    NzSelectModule,
    NzDatePickerModule],
})
export class ProfileModule {
}
