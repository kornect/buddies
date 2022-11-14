import { Store } from '@ngxs/store';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { CheckUsernameAction } from '@/app/store';

export class DuplicateEmailValidator {
  static createValidator(store: Store): AsyncValidatorFn {
    return (control: AbstractControl): Observable<any> => {
      return store.dispatch(new CheckUsernameAction({ email: control.value }))
        .pipe(
          map((result: boolean) =>
            result ? { usernameAlreadyExists: true } : null
          )
        );
    };
  }
}
