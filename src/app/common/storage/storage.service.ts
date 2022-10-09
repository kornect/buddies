import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  set(key: string, payload: any) {
    localStorage.setItem(key, JSON.stringify(payload));
  }

  get(key: string): any {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(localStorage.getItem(key) || '');
    }

    return value;
  }

  clear(key: string) {
    localStorage.removeItem(key);
  }
}
