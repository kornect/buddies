import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '@/app/common/forms';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Store } from '@ngxs/store';
import { Location } from '@angular/common';
import { ChangePasswordAction } from '@/app/store/state';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent extends BaseFormComponent implements OnInit {
  constructor(
    private formBuilder: UntypedFormBuilder,
    private message: NzMessageService,
    private store: Store,
    private location: Location
  ) {
    super();
    this.form = this.formBuilder.group({
      password: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(30)]]
    });
  }

  ngOnInit(): void {

  }

  Save(formValues: any): Observable<any> {
    return this.store.dispatch(new ChangePasswordAction(formValues)).pipe(
      tap(() => {
        this.message.success('Password changed');
        this.location.back();
      })
    );
  }

  Cancel() {
    this.location.back();
  }
}
