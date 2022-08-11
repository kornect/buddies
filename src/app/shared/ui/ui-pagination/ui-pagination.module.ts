import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NzSelectModule } from 'ng-zorro-antd/select';

import { UiPaginationComponent } from './ui-pagination.component';


@NgModule({
  declarations: [UiPaginationComponent],
  imports: [CommonModule, ReactiveFormsModule, NzSelectModule],
  exports: [UiPaginationComponent],
})
export class UiPaginationModule {}
