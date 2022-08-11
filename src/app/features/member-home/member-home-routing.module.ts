import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MemberHomeComponent } from './member-home.component';

const routes: Routes = [{ path: '', component: MemberHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberHomeRoutingModule {}
