import { registerLocaleData } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { ApolloLink, InMemoryCache } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { BreadcrumbsModule } from '@exalif/ngx-breadcrumbs';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { Observable, of, switchMap } from 'rxjs';
import { DefaultLayoutModule } from '@/app/components/layouts/default-layout';
import { APP_ROUTES } from '@/app/routes';
import { APP_STATES } from '@/app/store';
import { environment } from '@/environments';

import { AppLandingComponent } from './components/app-landing.component';
import { AppComponent } from './app.component';
import { AuthService, HttpAuthInterceptor } from '@/app/auth';

registerLocaleData(en);

function initializeAppFactory(authService: AuthService): () => Observable<any> {
  return () => authService.isAuthenticatedAsync().pipe(switchMap(() => of(true)));
}

export function createApollo(httpLink: HttpLink, authService: AuthService, graphqlUrl: string) {
  const basic = setContext((operation, context) => ({
    headers: {
      Accept: 'charset=utf-8'
    }
  }));

  const auth = setContext((operation, context) => {
    if (!authService.hasValidAccessToken()) {
      return {};
    } else {
      const accessToken = authService.getAccessToken();
      return {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      };
    }
  });

  const link = ApolloLink.from([
    basic,
    auth,
    httpLink.create({
      uri: environment.hasura
    })
  ]);
  const cache = new InMemoryCache();

  return {
    link,
    cache
  };
}

@NgModule({
  declarations: [AppComponent, AppLandingComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES, {
      initialNavigation: 'enabledBlocking'
    }),
    BreadcrumbsModule.forRoot({
      postProcess: null,
      applyDistinctOn: 'text'
    }),
    NzMessageModule,
    GoogleMapsModule,
    NgxsModule.forRoot(APP_STATES, {
      developmentMode: !environment.production
    }),
    environment.production ? [] : NgxsReduxDevtoolsPluginModule.forRoot(),
    DefaultLayoutModule,
    ApolloModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      deps: [AuthService],
      multi: true
    },
    { provide: HTTP_INTERCEPTORS, useClass: HttpAuthInterceptor, multi: true },
    { provide: NZ_I18N, useValue: en_US },
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink, authService: AuthService) => createApollo(httpLink, authService, environment.hasura),
      deps: [HttpLink, AuthService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
