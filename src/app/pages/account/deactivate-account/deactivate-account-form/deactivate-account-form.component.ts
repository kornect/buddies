import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable, Observer, tap } from 'rxjs';
import { BaseFormComponent } from 'shared/ui/ui-forms';

import { UserService } from 'domain/services/user';


@Component({
  selector: 'app-deactivate-account-form',
  templateUrl: './deactivate-account-form.component.html',
  styleUrls: ['./deactivate-account-form.component.scss'],
})
export class DeactivateAccountFormComponent extends BaseFormComponent implements OnInit {
  @Output() onClose = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private message: NzMessageService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    super();
    this.form = this.formBuilder.group({
      confirm: [
        null,
        [Validators.required],
        (control: AbstractControl) =>
          new Observable((observer: Observer<ValidationErrors | null>) => {
            if (control.value !== 'yes') {
              observer.next({ confirm: true, match: true });
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
    return this.userService.deleteUser().pipe(
      tap(() => {
        this.message.success('Account deactivated successfully');
        this.onClose.emit();
        this.router.navigate(['/'], { relativeTo: this.route }).then();
      })
    );
  }
}
