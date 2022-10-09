import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UiStickyNavComponent } from './ui-sticky-nav/ui-sticky-nav.component';
import { UiStickyComponent } from './ui-sticky.component';


@NgModule({
  declarations: [UiStickyComponent, UiStickyNavComponent],
  imports: [CommonModule],
  exports: [UiStickyComponent, UiStickyNavComponent],
})
export class UiStickyModule {}
