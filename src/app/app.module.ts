import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ThemeService } from 'core/services/theme';
import { UserService } from 'data/user';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { UiLogoModule } from 'shared/ui/ui-logo';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appInitializer } from './app.initializer';
import { ShellModule } from './shell/shell.module';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShellModule,
    UiLogoModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      deps: [UserService, ThemeService],
      multi: true,
    },
    { provide: NZ_I18N, useValue: en_US },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
