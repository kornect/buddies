import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UiCurrentUserComponent } from './ui-current-user.component';


@NgModule({
  declarations: [UiCurrentUserComponent],
  imports: [CommonModule],
  exports: [UiCurrentUserComponent],
})
export class UiCurrentUserModule {}
