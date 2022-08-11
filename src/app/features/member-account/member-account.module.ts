import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberAccountRoutingModule } from './member-account-routing.module';
import { MemberAccountComponent } from './member-account.component';


@NgModule({
  declarations: [
    MemberAccountComponent
  ],
  imports: [
    CommonModule,
    MemberAccountRoutingModule
  ]
})
export class MemberAccountModule { }
