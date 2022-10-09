import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthImports } from '@/app/pages/common-imports';
import { ForgotPasswordPageComponent } from '@/app/pages/forgot-password/forgot-password-page.component';


@NgModule({
  declarations: [ForgotPasswordPageComponent],
  imports: [...AuthImports, RouterModule.forChild([{ path: '', component: ForgotPasswordPageComponent }])],
})
export class ForgotPasswordModule {}
