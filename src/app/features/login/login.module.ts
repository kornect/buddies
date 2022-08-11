import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UiFormsModule } from 'shared/ui/ui-forms';
import { UiLogoModule } from 'shared/ui/ui-logo';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, UiFormsModule, UiLogoModule],
})
export class LoginModule {}
