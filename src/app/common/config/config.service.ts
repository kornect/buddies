import { Injectable } from '@angular/core';

import { NhostClientConstructorParams } from '@nhost/nhost-js';

import { environment } from '@/environments';


@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  getNhostConfig(): NhostClientConstructorParams {
    return {
      subdomain: environment.subdomain,
      region: environment.region,
      autoRefreshToken: true,
      clientStorageType: 'localStorage',
      refreshIntervalTime: 300, // 5 minutes
      devTools: !environment.production,
      backendUrl: environment.backendUrl,
    };
  }
}
