import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from '@/environments';

import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}

const providers = [
  { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];

platformBrowserDynamic(providers)
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
