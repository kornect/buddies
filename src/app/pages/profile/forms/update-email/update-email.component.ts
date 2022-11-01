import { Location } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';

import { Store } from '@ngxs/store';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable, tap } from 'rxjs';

import { BaseFormComponent } from '@/app/common/forms';
import { User } from '@/app/store/models';
import { ChangeEmailAction, GetUserAction, UserState } from '@/app/store';


@Component({
  selector: 'app-update-email',
  templateUrl: './update-email.component.html',
  styleUrls: ['./update-email.component.scss']
})
export class UpdateEmailComponent extends BaseFormComponent implements OnInit {
  @Output() onSaved = new EventEmitter();

  user!: User | null;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private message: NzMessageService,
    private store: Store,
    private location: Location
  ) {
    super();
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    this.user = this.store.selectSnapshot(UserState.user);
  }

  Save(formValues: any): Observable<any> {
    return this.store.dispatch(new ChangeEmailAction(formValues)).pipe(
      tap(() => {
        this.message.success('Please confirm your email');
        this.location.back();
        this.store.dispatch(new GetUserAction());
      })
    );
  }

  Cancel() {
    this.location.back();
  }
}
