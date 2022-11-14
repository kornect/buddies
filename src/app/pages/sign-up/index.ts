import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthImports } from '@/app/pages/common-imports';
import { SignUpPageComponent } from './sign-up-page.component';
import { SignUpVerificationComponent } from './sign-up-verification/sign-up-verification.component';
import { SignUpService } from './sign-up.service';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { FormValidators } from '@/app/pages/sign-up/validators/sign-up-validators';


@NgModule({
  declarations: [
    SignUpPageComponent,
    SignUpFormComponent,
    SignUpVerificationComponent
  ],
  imports: [
    NgOtpInputModule,
    RouterModule.forChild([{
      path: '', component: SignUpPageComponent,
      children: [
        { path: '', component: SignUpFormComponent },
        { path: 'verify-account', component: SignUpVerificationComponent }
      ]
    }]), ...AuthImports],
  providers: [SignUpService, FormValidators]
})
export class SignUpModule {
}
