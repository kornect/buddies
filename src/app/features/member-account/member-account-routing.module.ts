import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MemberAccountComponent } from './member-account.component';

const routes: Routes = [{ path: '', component: MemberAccountComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberAccountRoutingModule {}
