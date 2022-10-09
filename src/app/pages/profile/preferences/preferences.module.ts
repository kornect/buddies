import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreferencesRoutingModule } from './preferences-routing.module';
import { PreferencesComponent } from './preferences.component';
import { EmailPreferencesComponent } from './email-preferences/email-preferences.component';
import { NotificationPreferencesComponent } from './notification-preferences/notification-preferences.component';
import { DatingPreferencesComponent } from './dating-preferences/dating-preferences.component';


@NgModule({
  declarations: [
    PreferencesComponent,
    EmailPreferencesComponent,
    NotificationPreferencesComponent,
    DatingPreferencesComponent
  ],
  imports: [
    CommonModule,
    PreferencesRoutingModule
  ]
})
export class PreferencesModule { }
