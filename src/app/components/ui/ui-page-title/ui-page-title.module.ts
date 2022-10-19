import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiPageTitleComponent } from './ui-page-title.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    UiPageTitleComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [UiPageTitleComponent]
})
export class UiPageTitleModule {
}
