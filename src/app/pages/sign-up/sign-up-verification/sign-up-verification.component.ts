import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '@/app/common/forms';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable, switchMap, tap } from 'rxjs';
import { SendSignUpToken, SignInAction, SignUpAction } from '@/app/store';
import { SignUpService } from '@/app/pages/sign-up/sign-up.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-sign-up-verification',
  templateUrl: './sign-up-verification.component.html',
  styleUrls: ['./sign-up-verification.component.scss']
})
export class SignUpVerificationComponent extends BaseFormComponent implements OnInit {
  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store,
    private signUpService: SignUpService,
    private message: NzMessageService
  ) {
    super();
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
      confirmToken: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
    });
  }

  get email() {
    return this.form.get('email')?.value;
  }

  onOtpChange(otp: string) {
    this.form.patchValue({ confirmToken: otp });
  }

  ngOnInit(): void {
    this.form.patchValue({
      email: this.signUpService.email,
      password: this.signUpService.password
    });

    if (this.signUpService.email && this.signUpService.password) {
      this.form.markAsDirty();
      this.store.dispatch(new SendSignUpToken({ email: this.signUpService.email })).subscribe();
    }
  }

  ResendToken() {
    this.store.dispatch(new SendSignUpToken({ email: this.email })).subscribe();
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
