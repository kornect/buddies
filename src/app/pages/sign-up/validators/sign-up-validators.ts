import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { debounceTime, map, Observable, Observer, switchMap, take } from 'rxjs';
import { EmailExistsGQL, SignUpTokenValidGQL } from '@/app/graphql/user/user.generated';

@Injectable({ providedIn: 'root' })
export class FormValidators {
  constructor(private store: Store,
              private verifySignUpTokenGQL: SignUpTokenValidGQL,
              private checkForEmailExistsGQL: EmailExistsGQL) {
  }

  uniqueEmail() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        debounceTime(1500),
        switchMap(email => this.checkForEmailExistsGQL.mutate({ email })),
        take(1),
        map(({ data }) => data?.users_check_for_email_exists?.exists),
        map((exists: boolean | undefined) => {
          return exists ? { unique: true } : null;
        })
      );
    };
  }

  validSignUpToken(callback: (isValid: boolean) => void) {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        debounceTime(1500),
        switchMap(token => this.verifySignUpTokenGQL.mutate({ token, email: control.parent?.get('email')?.value })),
        take(1),
        map(({ data }) => data?.users_validate_sign_up_token?.valid),
        map((isValid: boolean | undefined) => {
          if (isValid) {
            callback(true);
          }
          return isValid ? null : { token: true };
        })
      );
    };
  }

  validAge() {
    return (control: AbstractControl) =>
      new Observable((observer: Observer<ValidationErrors | null>) => {
        const today = new Date();
        const birthDate = new Date(control.value);
        const m = today.getMonth() - birthDate.getMonth();

        let age = today.getFullYear() - birthDate.getFullYear();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age = age - 1;
        }

        console.log('Age', age);

        observer.next(age < 18 ? { error: true, validAge: true } : null);
        observer.complete();
      });
  }
}
