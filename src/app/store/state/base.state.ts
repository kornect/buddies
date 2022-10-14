import { User as NhostUser } from '@nhost/core';
import { BehaviorSubject, Observable, catchError, finalize, from, tap } from 'rxjs';

import { NHostService } from '@/app/common/nhost';

export interface GraphQLError extends Error {}

export abstract class BaseState {
  protected constructor(private nHostService: NHostService) {
    this.nHostService.auth.onAuthStateChanged((_, session) => {
      this._authStateChanged.next(session?.user ?? null);
    });

    this._authStateChanged.next(this.getUser());
  }

  private _authStateChanged = new BehaviorSubject<NhostUser | null>(null);

  get authStateChanged(): Observable<NhostUser | null> {
    return this._authStateChanged.asObservable();
  }

  getUser(): NhostUser | null {
    return this.nHostService.auth.getUser();
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

  handleError(error: Error | object | object[], message?: string) {
    const graphQLError = this.getGraphQLError(error);
    throw new Error(graphQLError?.message || message || 'Failure');
  }
}
