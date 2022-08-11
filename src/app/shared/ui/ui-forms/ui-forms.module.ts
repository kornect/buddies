import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ValidationsComponent } from './validations/validations.component';

@NgModule({
  declarations: [ValidationsComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [FormsModule, ReactiveFormsModule, ValidationsComponent],
})
export class UiFormsModule {}
