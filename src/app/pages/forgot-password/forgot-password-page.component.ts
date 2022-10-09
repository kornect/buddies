import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Store } from '@ngxs/store';
import { Observable, tap } from 'rxjs';

import { BaseFormComponent } from '@/app/common/forms';
import { ResetPasswordRequestAction } from '@/app/store/state';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.scss'],
})
export class ForgotPasswordPageComponent extends BaseFormComponent implements OnInit {
  resetCompleted = false;
  email!: string | null;
  private returnUrl!: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store
  ) {
    super();
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/search';
  }

  Save(formValues: any): Observable<any> {
    return this.store.dispatch(new ResetPasswordRequestAction(formValues)).pipe(
      tap(() => {
        this.email = formValues.email;
        this.resetCompleted = true;
      })
    );
  }

  onTryAgain() {
    this.email = null;
    this.resetCompleted = false;
  }

  goToLogin() {
    this.router.navigate(['../sign-in'], { relativeTo: this.route }).then();
  }
}
