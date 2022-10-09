import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { UiInputValidation } from './ui-input-validation.component';


@NgModule({
  declarations: [UiInputValidation],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [UiInputValidation],
})
export class UiInputValidationModule {}
