import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BaseLayoutComponent } from './base-layout.component';


@NgModule({
  declarations: [BaseLayoutComponent],
  imports: [CommonModule, RouterModule],
  exports: [BaseLayoutComponent],
})
export class BaseLayoutModule {}
