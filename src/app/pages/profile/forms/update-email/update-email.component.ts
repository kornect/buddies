import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BaseFormComponent } from '@/app/common/forms';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Store } from '@ngxs/store';
import { Location } from '@angular/common';
import { ChangeEmailAction, GetUserAction, SessionState } from '@/app/store/state';
import { Observable, tap } from 'rxjs';
import { SessionUser } from '@/app/store/models';

@Component({
  selector: 'app-update-email',
  templateUrl: './update-email.component.html',
  styleUrls: ['./update-email.component.scss']
})
export class UpdateEmailComponent extends BaseFormComponent implements OnInit {
  @Output() onSaved = new EventEmitter();

  user!: SessionUser | null;

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
    this.user = this.store.selectSnapshot(SessionState.user);
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

