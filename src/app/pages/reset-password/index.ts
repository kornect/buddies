import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthImports } from '@/app/pages/common-imports';
import { ResetPasswordPageComponent } from '@/app/pages/reset-password/reset-password-page.component';


@NgModule({
  declarations: [ResetPasswordPageComponent],
  imports: [...AuthImports, RouterModule.forChild([{ path: '', component: ResetPasswordPageComponent }])],
})
export class ResetPasswordModule {}
