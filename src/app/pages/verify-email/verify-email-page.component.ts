import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngxs/store';
import { NzMessageService } from 'ng-zorro-antd/message';
import { tap } from 'rxjs';

import { SendVerificationLinkAction } from '@/app/store/state';


@UntilDestroy()
@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email-page.component.html',
  styleUrls: ['./verify-email-page.component.scss'],
})
export class VerifyEmailPageComponent implements OnInit {
  resendConfirmationEmailCompleted: boolean = true;
  email!: string;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router,
    private message: NzMessageService
  ) {}

  ngOnInit(): void {
    this.route.queryParams
      .pipe(
        untilDestroyed(this),
        tap((params) => {
          const { email, referrer } = params;
          this.email = email as string;
          if (referrer !== 'sign-up') {
            this.resendConfirmationEmail();
          }
        })
      )
      .subscribe();
  }

  resendConfirmationEmail(): void {
    if (this.resendConfirmationEmailCompleted) {
      if (this.email) {
        this.resendConfirmationEmailCompleted = false;
        this.store
          .dispatch(new SendVerificationLinkAction({ email: this.email }))
          .pipe(
            tap(() => {
              this.message.success('Verification email sent');
              this.resendConfirmationEmailCompleted = true;
            })
          )
          .subscribe()
          .unsubscribe();
      }
    } else {
      this.message.success('please wait...');
    }
  }

  goToLogin() {
    this.router.navigate(['../sign-in'], { relativeTo: this.route }).then();
  }
}
