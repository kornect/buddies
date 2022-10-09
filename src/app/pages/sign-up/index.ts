import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthImports } from '@/app/pages/common-imports';
import { SignUpPageComponent } from '@/app/pages/sign-up/sign-up-page.component';


@NgModule({
  declarations: [SignUpPageComponent],
  imports: [RouterModule.forChild([{ path: '', component: SignUpPageComponent }]), ...AuthImports],
})
export class SignUpModule {}
