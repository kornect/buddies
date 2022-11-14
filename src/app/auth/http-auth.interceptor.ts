import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { BehaviorSubject, catchError, filter, Observable, switchMap, take, throwError } from 'rxjs';
import { AuthService } from '@/app/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpAuthInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject = new BehaviorSubject<any>(null);

  constructor(private authService: AuthService) {
  }

  ignoresUrl(url: string): boolean {
    const ignoredUrls = [
      '/connect/token'
    ];

    return ignoredUrls.some((ignoredUrl) => url.endsWith(ignoredUrl));
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // ignore if url is in ignoredUrls
    if (this.ignoresUrl(req.url)) {
      return next.handle(req);
    } else {
      return this.authService.isAuthenticatedAsync().pipe(switchMap((isAuthenticated) => {
        if (isAuthenticated) {
          req = this.addToken(req, this.authService.getAccessToken());
        }

        return next.handle(req).pipe(catchError((error) => {
          if (error instanceof HttpErrorResponse && error.status === 401) {
            return this.handle401Error(req, next);
          } else {
            return throwError(error);
          }
        }));
      }));
    }
  }

  private addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
    return req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + token
      }
    });
  }

  private handle401Error(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this.authService.refreshTokens().pipe(
        switchMap((token) => {
          this.isRefreshing = false;
          this.refreshTokenSubject.next(token?.accessToken);
          return next.handle(this.addToken(req, token?.accessToken));
        }),
        catchError((error) => {
          this.isRefreshing = false;
          this.authService.logOut();
          return throwError(error);
        }));
    } else {
      return this.refreshTokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(token => {
          return next.handle(this.addToken(req, token));
        }));
    }
  }
}
