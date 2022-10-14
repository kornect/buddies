import { Component, Input, OnInit } from '@angular/core';

import { Store } from '@ngxs/store';
import { NzMessageService } from 'ng-zorro-antd/message';
import { tap } from 'rxjs';

import { User } from '@/app/store/models';
import { SendVerificationLinkAction } from '@/app/store/state';


@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss'],
})
export class VerifyEmailComponent implements OnInit {
  @Input() user!: User | null | undefined;
  resendConfirmationEmailCompleted: boolean = true;

  constructor(private store: Store, private message: NzMessageService) {}

  ngOnInit(): void {
    this.resendConfirmationEmail();
  }

  resendConfirmationEmail(): void {
    if (this.resendConfirmationEmailCompleted) {
      if (this.user && this.user.email) {
        this.resendConfirmationEmailCompleted = false;
        this.store
          .dispatch(
            new SendVerificationLinkAction({
              email: this.user.email,
            })
          )
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
