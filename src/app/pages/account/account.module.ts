import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzMessageModule } from 'ng-zorro-antd/message';
import { UiPasswordStrengthModule } from 'shared/../../components/ui/ui-password-strength';
import { UiFormsModule } from 'shared/ui/ui-forms';

import { AccountRoutingModule } from './account-routing.module';
import { AccountEmailChangeFormComponent } from './account-signin-method/account-email/account-email-change-form/account-email-change-form.component';
import { AccountEmailComponent } from './account-signin-method/account-email/account-email.component';
import { AccountPasswordChangeFormComponent } from './account-signin-method/account-password/account-password-change-form/account-password-change-form.component';
import { AccountPasswordComponent } from './account-signin-method/account-password/account-password.component';
import { AccountSigninMethodComponent } from './account-signin-method/account-signin-method.component';
import { AccountComponent } from './account.component';
import { DeactivateAccountFormComponent } from './deactivate-account/deactivate-account-form/deactivate-account-form.component';
import { DeactivateAccountComponent } from './deactivate-account/deactivate-account.component';

@NgModule({
  declarations: [
    AccountComponent,
    AccountSigninMethodComponent,
    DeactivateAccountComponent,
    DeactivateAccountFormComponent,
    AccountEmailComponent,
    AccountEmailChangeFormComponent,
    AccountPasswordComponent,
    AccountPasswordChangeFormComponent,
  ],
  imports: [CommonModule, AccountRoutingModule, UiFormsModule, UiPasswordStrengthModule, NzMessageModule],
})
export class AccountModule {}
