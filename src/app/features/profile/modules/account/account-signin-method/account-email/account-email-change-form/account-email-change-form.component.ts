import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { UserService } from 'data/user';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable, of, tap } from 'rxjs';
import { BaseFormComponent } from 'shared/ui/ui-forms';

@Component({
  selector: 'app-account-email-change-form',
  templateUrl: './account-email-change-form.component.html',
  styleUrls: ['./account-email-change-form.component.scss'],
})
export class AccountEmailChangeFormComponent extends BaseFormComponent implements OnInit {
  @Output() onClose = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private message: NzMessageService, private userService: UserService) {
    super();
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {}

  Save(formValues: any): Observable<any> {
    return this.userService.changeEmail(formValues).pipe(
      tap(() => {
        this.message.success('Please check your email to verify your new email');
        this.onClose.emit();
      })
    );
  }
}
