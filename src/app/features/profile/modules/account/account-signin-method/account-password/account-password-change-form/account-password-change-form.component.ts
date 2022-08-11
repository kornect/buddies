import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';

import { UserService } from 'data/user';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable, Observer, tap } from 'rxjs';
import { BaseFormComponent } from 'shared/ui/ui-forms';

@Component({
  selector: 'app-account-password-change-form',
  templateUrl: './account-password-change-form.component.html',
  styleUrls: ['./account-password-change-form.component.scss'],
})
export class AccountPasswordChangeFormComponent extends BaseFormComponent implements OnInit {
  @Output() onClose = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private message: NzMessageService, private userService: UserService) {
    super();
    this.form = this.formBuilder.group({
      newPassword: [
        null,
        [Validators.required, Validators.minLength(8)],
        (_: AbstractControl) =>
          new Observable((observer: Observer<ValidationErrors | null>) => {
            setTimeout(() => this.form.get('confirmPassword')?.updateValueAndValidity());
            observer.next(null);
            observer.complete();
          }),
      ],
      confirmPassword: [
        null,
        [Validators.required],
        (control: AbstractControl) =>
          new Observable((observer: Observer<ValidationErrors | null>) => {
            if (control.value !== this.form.get('newPassword')?.value) {
              observer.next({ error: true, match: true });
            } else {
              observer.next(null);
            }
            observer.complete();
          }),
      ],
    });
  }

  ngOnInit(): void {}

  Save(formValues: any): Observable<any> {
    return this.userService.changePassword(formValues).pipe(
      tap(() => {
        this.message.success('Password changed successfully');
        this.onClose.emit();
      })
    );
  }
}
