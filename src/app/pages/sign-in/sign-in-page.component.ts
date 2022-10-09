import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Store } from '@ngxs/store';
import { Observable, catchError, tap, throwError } from 'rxjs';

import { BaseFormComponent } from '@/app/common/forms';
import { SignInAction } from '@/app/store/state';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss'],
})
export class SignInPageComponent extends BaseFormComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store
  ) {
    super();
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  Save(formValues: any): Observable<any> {
    return this.store.dispatch(new SignInAction(formValues)).pipe(
      tap(() => {
        this.router
          .navigateByUrl('', {
            replaceUrl: true,
          })
          .then();
      }),
      catchError((error) => {
        if (error.message === 'Email needs verification') {
          this.router
            .navigate(['../verify-email'], {
              queryParams: {
                email: formValues.email,
              },
              relativeTo: this.route,
            })
            .then();
        }

        return throwError(error);
      })
    );
  }
}
