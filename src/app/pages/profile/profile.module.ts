import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DefaultLayoutModule } from 'layouts/default-layout';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';


@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule, ProfileRoutingModule, DefaultLayoutModule],
})
export class ProfileModule {}
