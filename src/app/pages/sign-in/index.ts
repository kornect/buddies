import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthImports } from '@/app/pages/common-imports';

import { SignInPageComponent } from './sign-in-page.component';


@NgModule({
  declarations: [SignInPageComponent],
  imports: [RouterModule.forChild([{ path: '', component: SignInPageComponent }]), ...AuthImports],
})
export class SignInModule {}
