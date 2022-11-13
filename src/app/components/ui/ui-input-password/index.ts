import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UiInputPasswordComponent } from '@/app/components/ui/ui-input-password/ui-input-password.component';
import { UiPasswordStrengthComponent } from '@/app/components/ui/ui-input-password/ui-password-strength.component';


@NgModule({
  declarations: [UiInputPasswordComponent, UiPasswordStrengthComponent],
  exports: [UiInputPasswordComponent, UiPasswordStrengthComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class UiInputPasswordModule {
}
