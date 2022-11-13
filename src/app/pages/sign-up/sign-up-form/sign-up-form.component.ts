import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '@/app/common/forms';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SignUpService } from '@/app/pages/sign-up/sign-up.service';

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
    private signUpService: SignUpService
  ) {
    super();
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(30)]]
    });
  }

  ngOnInit(): void {

  }

  Save(formValues: any): Observable<any> {
    return new Observable(observer => {
      this.signUpService.email = formValues.email;
      this.signUpService.password = formValues.password;

      this.router.navigate(['verify-account'], { relativeTo: this.route }).then();

      observer.next();
      observer.complete();
    });
  }
}
