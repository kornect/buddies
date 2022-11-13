import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  constructor() {
  }

  private _email!: string;

  get email(): string {
    return this._email;
  }

  set email(email: string) {
    this._email = email;
  }

  private _password!: string;

  get password(): string {
    return this._password;
  }

  set password(token: string) {
    this._password = token;
  }

  clear() {
    this.email = '';
    this.password = '';
  }
}
