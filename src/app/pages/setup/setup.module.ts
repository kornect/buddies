import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { ImageCropperModule } from 'ngx-image-cropper';
import { UiLogoModule } from 'shared/../../components/ui/ui-logo';
import { UiFormsModule } from 'shared/ui/ui-forms';
import { UiSkeletonModule } from 'shared/ui/ui-skeleton';

import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { ProfileLocationComponent } from './components/profile-location/profile-location.component';
import { ProfilePhotosComponent } from './components/profile-photos/profile-photos.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SetupRoutingModule } from './setup-routing.module';
import { SetupComponent } from './setup.component';

@NgModule({
  declarations: [
    SetupComponent,
    VerifyEmailComponent,
    ProfileDetailsComponent,
    ProfilePhotosComponent,
    ProfileLocationComponent,
    WelcomeComponent,
  ],
  imports: [
    CommonModule,
    SetupRoutingModule,
    UiLogoModule,
    UiFormsModule,
    NzMessageModule,
    NzSwitchModule,
    NzSelectModule,
    NzDatePickerModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    UiSkeletonModule,
    ImageCropperModule,
  ],
})
export class SetupModule {}
