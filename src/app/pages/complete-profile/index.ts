import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { RouterModule } from '@angular/router';

import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { ImageCropperModule } from 'ngx-image-cropper';

import { UiLogoModule } from '@/app/components/ui/ui-logo';
import { UiSkeletonModule } from '@/app/components/ui/ui-skeleton';
import { AuthImports } from '@/app/pages/common-imports';
import { ProfileDetailsComponent } from '@/app/pages/complete-profile/profile-details/profile-details.component';
import { ProfileLocationComponent } from '@/app/pages/complete-profile/profile-location/profile-location.component';
import { ProfilePhotosComponent } from '@/app/pages/complete-profile/profile-photos/profile-photos.component';
import { VerifyEmailComponent } from '@/app/pages/complete-profile/verify-email/verify-email.component';
import { WelcomeComponent } from '@/app/pages/complete-profile/welcome/welcome.component';

import { CompleteProfileComponent } from './complete-profile.component';


@NgModule({
  declarations: [
    CompleteProfileComponent,
    VerifyEmailComponent,
    ProfileDetailsComponent,
    ProfilePhotosComponent,
    ProfileLocationComponent,
    WelcomeComponent,
  ],
  imports: [
    ...AuthImports,
    RouterModule.forChild([{ path: '', component: CompleteProfileComponent }]),
    NzMessageModule,
    NzSwitchModule,
    NzSelectModule,
    NzDatePickerModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    UiSkeletonModule,
    ImageCropperModule,
    UiLogoModule,
  ],
})
export class CompleteProfileModule {}
