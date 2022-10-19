import { Injectable } from '@angular/core';

import { NhostClient } from '@nhost/nhost-js';

import { ConfigService } from '@/app/common/config';

@Injectable({
  providedIn: 'root'
})
export class NHostService extends NhostClient {
  constructor(private configService: ConfigService) {
    super(configService.getNhostConfig());
  }
}
