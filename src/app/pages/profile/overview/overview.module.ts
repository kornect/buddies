import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';
import { ProfileDetailsFormComponent } from './profile-details/profile-details-form/profile-details-form.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';

@NgModule({
  declarations: [OverviewComponent, ProfileDetailsComponent, ProfileDetailsFormComponent],
  imports: [CommonModule, OverviewRoutingModule],
  exports: [ProfileDetailsComponent],
})
export class OverviewModule {}
