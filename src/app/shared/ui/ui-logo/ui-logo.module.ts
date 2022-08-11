import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UiLogoComponent } from './ui-logo.component';

@NgModule({
  declarations: [UiLogoComponent],
  imports: [CommonModule],
  exports: [UiLogoComponent],
})
export class UiLogoModule {}
