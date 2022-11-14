import { Store } from '@ngxs/store';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { VerifySignUpToken } from '@/app/store';

export class SignUpTokenValidator {
  static createValidator(store: Store): AsyncValidatorFn {
    return (control: AbstractControl): Observable<any> => {
      const email = control.parent?.get('email')?.value;
      return store.dispatch(new VerifySignUpToken({
        email,
        token: control.value
      }))
        .pipe(
          map((result: boolean) =>
            result ? { isValid: true } : null
          )
        );
    };
  }
}
