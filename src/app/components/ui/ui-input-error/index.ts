import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UiInputErrorComponent } from '@/app/components/ui/ui-input-error/ui-input-error.component';


@NgModule({
  declarations: [UiInputErrorComponent],
  exports: [UiInputErrorComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class UiInputErrorModule {}
