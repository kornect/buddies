import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { BreadcrumbsModule } from '@exalif/ngx-breadcrumbs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule, Store } from '@ngxs/store';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { Observable, from, switchMap } from 'rxjs';

import { NHostService } from '@/app/common/nhost';
import { DefaultLayoutModule } from '@/app/components/layouts/default-layout';
import { APP_ROUTES } from '@/app/routes';
import { APP_STATES, InitThemeAction } from '@/app/store/state';
import { environment } from '@/environments';

import { AppLandingComponent } from './app-landing.component';
import { AppComponent } from './app.component';

registerLocaleData(en);

function initializeAppFactory(hostService: NHostService, store: Store): () => Observable<any> {
  return () =>
    from(hostService.auth.isAuthenticatedAsync()).pipe(
      switchMap(() => {
        return store.dispatch([new InitThemeAction()]);
      })
    );
}

@NgModule({
  declarations: [AppComponent, AppLandingComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES, {
      initialNavigation: 'enabledBlocking',
    }),
    BreadcrumbsModule.forRoot({
      postProcess: null,
      applyDistinctOn: 'text',
    }),
    NzMessageModule,
    GoogleMapsModule,
    FontAwesomeModule,
    NgxsModule.forRoot(APP_STATES, {
      developmentMode: !environment.production,
    }),
    environment.production ? [] : NgxsReduxDevtoolsPluginModule.forRoot(),
    DefaultLayoutModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      deps: [NHostService, Store],
      multi: true,
    },
    { provide: NZ_I18N, useValue: en_US },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
