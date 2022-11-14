import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '@/app/common/forms';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { catchError, Observable, switchMap, tap } from 'rxjs';
import { SendSignUpToken, SignInAction, SignUpAction, VerifySignUpToken } from '@/app/store';
import { SignUpService } from '@/app/pages/sign-up/sign-up.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormValidators } from '@/app/pages/sign-up/validators/sign-up-validators';

@Component({
  selector: 'app-sign-up-verification',
  templateUrl: './sign-up-verification.component.html',
  styleUrls: ['./sign-up-verification.component.scss']
})
export class SignUpVerificationComponent extends BaseFormComponent implements OnInit {
  isValidToken = false;
  verifyingToken = false;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store,
    private signUpService: SignUpService,
    private message: NzMessageService,
    private validators: FormValidators
  ) {
    super();
    this.form = this.formBuilder.group({
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
        confirmToken: [null, [
          Validators.required,
          Validators.minLength(6)],
          this.validators.validSignUpToken((isValid) => {
            setTimeout(() => {
              this.message.success('Token verified successfully');
              this.isValidToken = isValid;
            }, 200);
          })
        ]
      }
    );
  }

  get email() {
    return this.form.get('email')?.value;
  }

  onOtpChange(otp: string) {
    this.form.patchValue({ confirmToken: otp });
    this.form.updateValueAndValidity();
  }

  ngOnInit(): void {
    if (this.signUpService.email) {
      this.form.patchValue({
        email: this.signUpService.email
      });
      this.form.updateValueAndValidity();
    } else {
      this.router.navigate(['../'], { relativeTo: this.route }).then();
    }
  }

  ResendToken() {
    this.store.dispatch(new SendSignUpToken({ email: this.email }))
      .pipe(tap(() => {
        this.message.success('Token sent successfully');
      }))
      .subscribe();
  }

  VerifyCode() {
    if (this.form.get('confirmToken')?.value) {
      this.verifyingToken = true;
      this.store.dispatch(new VerifySignUpToken({
        email: this.email,
        token: this.form.get('confirmToken')?.value
      }))
        .pipe(
          tap(() => {
            this.isValidToken = true;
            this.verifyingToken = false;
          }),
          catchError(() => {
            this.isValidToken = false;
            this.verifyingToken = false;
            return [];
          })).subscribe();
    }
  }

  GoBack() {
    this.signUpService.clear();
    this.router.navigate(['../'], { relativeTo: this.route }).then();
  }


  Save(formValues: any): Observable<any> {
    return this.store.dispatch(new SignUpAction(formValues)).pipe(
      tap(() => {
        this.message.success('Account created successfully');
      }),
      switchMap(() => this.store.dispatch(new SignInAction(formValues))),
      tap(() => {
        this.router
          .navigate(['../setup'], { relativeTo: this.route })
          .then();
      })
    );
  }
}
