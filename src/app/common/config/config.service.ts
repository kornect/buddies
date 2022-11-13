import { Injectable } from '@angular/core';

import { environment } from '@/environments';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  isProd(): boolean {
    return environment.production;
  }

  getGoogleMapsApiKey(): string {
    return environment.googleMapsApi;
  }
}
