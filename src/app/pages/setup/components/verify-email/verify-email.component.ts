import { Component, Input, OnInit } from '@angular/core';

import { NzMessageService } from 'ng-zorro-antd/message';
import { tap } from 'rxjs';

import { UserService } from 'domain/services/user';

import { CurrentUser } from '../../../../store/models';


@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss'],
})
export class VerifyEmailComponent implements OnInit {
  @Input() user!: CurrentUser | null | undefined;
  resendConfirmationEmailCompleted: boolean = true;

  constructor(private userService: UserService, private message: NzMessageService) {}

  ngOnInit(): void {
    this.resendConfirmationEmail();
  }

  resendConfirmationEmail(): void {
    if (this.resendConfirmationEmailCompleted) {
      if (this.user && this.user.email) {
        this.resendConfirmationEmailCompleted = false;
        this.userService
          .sendVerificationEmail({ email: this.user.email })
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
}
