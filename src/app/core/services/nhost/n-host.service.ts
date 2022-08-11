import { Injectable } from '@angular/core';

import { NhostClient } from '@nhost/nhost-js';
import { environment } from 'env';

export { User } from '@nhost/hasura-auth-js';

@Injectable({
  providedIn: 'root',
})
export class NHostService extends NhostClient {
  constructor() {
    super({
      subdomain: environment.subdomain,
      region: environment.region,
      autoRefreshToken: true,
      clientStorageType: 'localStorage',
      refreshIntervalTime: 300, // 5 minutes
      devTools: !environment.production,
    });
  }
}
