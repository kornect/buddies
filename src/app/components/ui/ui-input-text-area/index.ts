import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UiInputTextAreaComponent } from './ui-input-text-area.component';


@NgModule({
  declarations: [UiInputTextAreaComponent],
  exports: [UiInputTextAreaComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class UiInputTextAreaModule {
}
