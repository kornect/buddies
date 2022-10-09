import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UiLogoModule } from '@/app/components/ui/ui-logo';

import { AuthLayoutComponent } from './auth-layout.component';


@NgModule({
  exports: [AuthLayoutComponent],
  declarations: [AuthLayoutComponent],
  imports: [CommonModule, UiLogoModule],
})
export class AuthLayoutModule {}
