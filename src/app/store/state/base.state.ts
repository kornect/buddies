import { BehaviorSubject, Observable, catchError, finalize, from, tap } from 'rxjs';

import { NHostService } from '@/app/common/nhost';
import { SessionUser } from '@/app/store/models/session-user';

export interface GraphQLError extends Error {}

export abstract class BaseState {
  protected constructor(private nHostService: NHostService) {
    this.nHostService.auth.onAuthStateChanged((event, session) => {
      this._authStateChanged.next(this.getUser());
    });

    this._authStateChanged.next(this.getUser());
  }

  private _authStateChanged = new BehaviorSubject<SessionUser | null>(null);

  get authStateChanged(): Observable<SessionUser | null> {
    return this._authStateChanged.asObservable();
  }

  getUser(): SessionUser | null {
    const user = this.nHostService.auth.getUser();
    if (!user) {
      return null;
    }
    return {
      ...user,
      photoUrl: '',
    } as SessionUser;
  }

  getUserId() {
    return this.getUser()?.id;
  }

  /**
   * runs callback as observable
   * @param callback
   */
  withObservable<T>(callback: () => Promise<T>): Observable<T> {
    return new Observable<T>((subscriber) => {
      try {
        from(callback())
          .pipe(
            finalize(() => subscriber.complete()),
            tap((result) => subscriber.next(result)),
            catchError((error) => {
              subscriber.error(error);
              throw error;
            })
          )
          .subscribe();
      } catch (error) {
        subscriber.error(error);
      }
    });
  }

  getGraphQLError(error: Error | object | object[]): GraphQLError {
    if (error instanceof Error) {
      return error as GraphQLError;
    } else if (Array.isArray(error)) {
      return error[0] as GraphQLError;
    } else {
      return error as GraphQLError;
    }
  }
}
