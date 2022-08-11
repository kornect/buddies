import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberHomeRoutingModule } from './member-home-routing.module';
import { MemberHomeComponent } from './member-home.component';


@NgModule({
  declarations: [
    MemberHomeComponent
  ],
  imports: [
    CommonModule,
    MemberHomeRoutingModule
  ]
})
export class MemberHomeModule { }
