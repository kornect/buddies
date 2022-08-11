import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiStickyComponent } from './ui-sticky.component';
import { UiStickyNavComponent } from './ui-sticky-nav/ui-sticky-nav.component';



@NgModule({
  declarations: [
    UiStickyComponent,
    UiStickyNavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [UiStickyComponent, UiStickyNavComponent]
})
export class UiStickyModule { }
