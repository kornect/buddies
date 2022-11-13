import { catchError, finalize, from, Observable, tap } from 'rxjs';

export interface GraphQLError extends Error {
}

export abstract class BaseState {
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
