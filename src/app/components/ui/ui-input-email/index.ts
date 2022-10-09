import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UiInputEmailComponent } from './ui-input-email.component';


@NgModule({
  declarations: [UiInputEmailComponent],
  exports: [UiInputEmailComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class UiInputEmailModule {}
