import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, EMPTY, finalize, map, Observable, of, tap } from 'rxjs';
import { UntilDestroy } from '@ngneat/until-destroy';
import { StorageService } from '@/app/common/storage';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '@/environments';


const helper = new JwtHelperService();

export interface Session {
  sub: string;
  accessToken: string;
  refreshToken: string;
  expiresAt: Date;
  user: {
    id: string;
    email: string;
    emailConfirmed: boolean,
    roles: string[];
    defaultRole: string;
  };
}

export interface SessionEvent {
  event: 'init' | 'profile_loaded' | 'logout' | 'expired';
  session: Session | null;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  expiresAt: Date;
  user: {
    id: string;
    email: string;
    emailConfirmed: boolean,
    roles: string[];
    defaultRole: string;
  };
}

const storage_keys = {
  user: 'user',
  accessToken: 'token',
  refreshToken: 'refresh'
};

@UntilDestroy()
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private storage: StorageService,
    private http: HttpClient) {
  }

  private _authStateChanged = new BehaviorSubject<SessionEvent>({ event: 'init', session: null });

  get authStateChanged() {
    return this._authStateChanged.asObservable();
  }

  getUser() {
    return this.getSession()?.user;
  }

  // SignIn
  signIn(payload: { email: string; password: string }) {
    return this.http.post<AuthResponse>(this.baseApi() + '/connect/token', payload).pipe(tap((response) => {
      this.saveTokens(response);
      this._authStateChanged.next({
        event: 'profile_loaded',
        session: this.getSession()
      });
    }));
  }

  changePassword(param: { currentPassword: string, password: string }) {
    return this.http.post(`api/authorization/changepassword`, param);
  }

  sendVerificationEmail(param: { email: string }) {
    return this.http.post(`api/authorization/sendverificationemail`, param);
  }

  changeEmail(payload: { email: string; password: string }) {
    return this.http.post(`api/authorization/changeemail`, payload);
  }

  sendResetPasswordEmail(param: { options: { redirectTo: string }; email: string }) {
    return this.http.post(`api/authorization/sendresetpasswordemail`, param);
  }

  resetPassword(param: { ticket: string; newPassword: string }) {
    return this.http.post(`api/authorization/resetpassword`, param);
  }

  /**
   * Checks if user session has valid access token and attempts to refresh it if it doesn't
   */
  isAuthenticatedAsync() {
    return new Observable<boolean>((observer) => {
      if (this.hasValidAccessToken()) {
        observer.next(true);
        observer.complete();
      } else if (this.hasValidRefreshToken()) {
        this.refreshTokens().pipe(map((session) => {
          observer.next(true);
          observer.complete();
        }), catchError((_) => {
          observer.next(false);
          observer.complete();
          return of(EMPTY);
        })).subscribe();
      } else {
        observer.next(false);
        observer.complete();
      }
    });
  }

  /**
   * Checks if the current access token is valid
   */
  hasValidAccessToken() {
    return !this.isTokenExpired('access');
  }

  /**
   * Refresh access token and return new session
   */
  refreshTokens() {
    return new Observable<Session>((observer) => {
      if (!this.hasValidRefreshToken()) {
        observer.error('Invalid refresh token');
        observer.complete();
      } else {
        this.http.post<AuthResponse>(this.baseApi() + '/connect/token', {
          grant_type: 'refresh_token',
          refresh_token: this.getRefreshToken()
        }).pipe(
          tap((response) => {
            this.saveTokens(response);
            this._authStateChanged.next({
              event: 'profile_loaded',
              session: this.getSession()
            });
            observer.next(this.getSession() as Session);
            observer.complete();
          }),
          catchError((error) => {
            this.clearTokens();
            this._authStateChanged.next({
              event: 'expired',
              session: null
            });
            observer.error(error);
            observer.complete();
            return of(EMPTY);
          })
        ).subscribe();
      }
    });
  }

  /**
   * Returns current session access token
   */
  getAccessToken() {
    return this.getSession()?.accessToken || '';
  }

  /**
   * Returns current session refresh token
   */
  getRefreshToken() {
    return this.getSession()?.refreshToken || '';
  }

  /**
   * Logs user out and clears all session tokens
   */
  logOut() {
    return this.http.post(this.baseApi() + '/connect/invalidate', {
      refreshToken: this.getSession()?.refreshToken
    }).pipe(
      finalize(() => {
        this.clearTokens();

        this._authStateChanged.next({
          event: 'logout',
          session: null
        });
      }),
      catchError(() => of(EMPTY)));
  }

  getSession(): Session | null {
    const saved = this.storage.get(storage_keys.user);
    if (!saved) {
      return null;
    }

    const session = JSON.parse(saved);
    return session as Session;
  }

  private hasValidRefreshToken() {
    return !this.isTokenExpired('refresh');
  }

  private baseApi() {
    return environment.domain;
  }

  private saveTokens(authResponse: AuthResponse) {
    const session = Object.assign({
      sub: authResponse.user.id
    }, authResponse);

    this.storage.set(storage_keys.user, JSON.stringify(session));
  }

  private isTokenExpired(token: 'refresh' | 'access') {
    const session = this.getSession() as any;
    if (!session) {
      return true;
    }

    const { refreshToken, accessToken } = session;
    if (!refreshToken && !accessToken) {
      return true;
    }

    switch (token) {
      case 'access':
        return helper.isTokenExpired(accessToken);
      case 'refresh':
        return helper.isTokenExpired(refreshToken);
      default:
        return true;
    }
  }

  private clearTokens() {
    this.storage.clear(storage_keys.user);
  }
}
