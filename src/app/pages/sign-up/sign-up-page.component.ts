import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Store } from '@ngxs/store';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable, tap } from 'rxjs';

import { BaseFormComponent } from '@/app/common/forms';
import { SignUpAction } from '@/app/store/state';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss'],
})
export class SignUpPageComponent extends BaseFormComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private message: NzMessageService,
    private store: Store
  ) {
    super();
    this.form = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(60)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      acceptTerms: [false, Validators.requiredTrue],
    });
  }

  ngOnInit(): void {}

  Save(formValues: any): Observable<any> {
    return this.store.dispatch(new SignUpAction(formValues)).pipe(
      tap(() => {
        this.message.success('Account created successfully');
        this.router
          .navigate(['../verify-email'], {
            queryParams: {
              email: formValues.email,
              referrer: 'sign-up',
            },
            relativeTo: this.route,
          })
          .then();
      })
    );
  }
}
