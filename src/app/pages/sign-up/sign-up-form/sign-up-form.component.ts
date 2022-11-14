import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '@/app/common/forms';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap, tap } from 'rxjs';
import { SignUpService } from '@/app/pages/sign-up/sign-up.service';
import { Store } from '@ngxs/store';
import { CheckUsernameAction, SendSignUpToken } from '@/app/store';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent extends BaseFormComponent implements OnInit {
  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private signUpService: SignUpService,
    private store: Store
  ) {
    super();
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {

  }

  Save(formValues: any): Observable<any> {
    return this.store.dispatch(new CheckUsernameAction(formValues)).pipe(
      switchMap(() => this.store.dispatch(new SendSignUpToken(formValues))),
      tap(() => {
        this.signUpService.email = formValues.email;
        this.router.navigate(['verify-account'], { relativeTo: this.route }).then();
      })
    );
  }
}
