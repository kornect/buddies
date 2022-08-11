import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UiPasswordStrengthComponent } from './ui-password-strength.component';

@NgModule({
  declarations: [UiPasswordStrengthComponent],
  imports: [CommonModule],
  exports: [UiPasswordStrengthComponent],
})
export class UiPasswordStrengthModule {}
