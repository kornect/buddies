import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UiInputTextComponent } from './ui-input-text.component';


@NgModule({
  declarations: [UiInputTextComponent],
  exports: [UiInputTextComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class UiInputTextModule {}
