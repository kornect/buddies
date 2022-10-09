import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthImports } from '@/app/pages/common-imports';

import { VerifyEmailPageComponent } from './verify-email-page.component';


@NgModule({
  declarations: [VerifyEmailPageComponent],
  imports: [...AuthImports, RouterModule.forChild([{ path: '', component: VerifyEmailPageComponent }])],
})
export class VerifyEmailModule {}
