import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from 'data/user';
import { Observable, switchMap, tap } from 'rxjs';
import { BaseFormComponent } from 'shared/ui/ui-forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends BaseFormComponent implements OnInit {
  private returnUrl!: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {
    super();
    this.form = this.formBuilder.group({
      username: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/members';
  }

  Save(formValues: any): Observable<any> {
    return this.userService.login(formValues).pipe(
      tap(() => {
        this.router
          .navigateByUrl(this.returnUrl, {
            replaceUrl: true,
          })
          .then();
      })
    );
  }
}
