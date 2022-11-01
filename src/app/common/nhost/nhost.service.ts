import { Injectable } from '@angular/core';

import { NhostClient } from '@nhost/nhost-js';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '@/environments';

@Injectable({
  providedIn: 'root'
})
export class NhostService extends NhostClient {
  constructor(private http: HttpClient) {
    super({
      subdomain: env.subdomain,
      region: env.region,
      autoRefreshToken: true,
      clientStorageType: 'localStorage',
      refreshIntervalTime: 300, // 5 minutes
      devTools: !env.production
    });
  }

  // This is a workaround to allow get/post requests to Nhost functions
  get func() {
    return {
      get: (functionName: string, params: any | null = null) => this.get(functionName, params),
      post: (functionName: string, data: any) => this.post(functionName, data)
    };
  }

  private functionUrl(functionName: string) {
    return `https://${env.subdomain}.functions.${env.region}.nhost.run/v1/${functionName}`;
  }

  private get(functionName: string, params: any | null = null) {
    return this.http.get(this.functionUrl(functionName), {
      params,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.auth.getAccessToken()}`
      }
    });
  }

  private post(functionName: string, data: any) {
    return this.http.post(this.functionUrl(functionName), data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.auth.getAccessToken()}`
      }
    });
  }
}
