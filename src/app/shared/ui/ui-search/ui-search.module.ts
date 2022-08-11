import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { UiSearchComponent } from './ui-search.component';


@NgModule({
  declarations: [UiSearchComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [UiSearchComponent],
})
export class UiSearchModule {}
