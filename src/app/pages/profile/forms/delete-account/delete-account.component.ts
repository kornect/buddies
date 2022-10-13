import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BaseFormComponent } from '@/app/common/forms';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Store } from '@ngxs/store';
import { Location } from '@angular/common';
import { DeleteAccountAction } from '@/app/store/state';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.scss']
})
export class DeleteAccountComponent extends BaseFormComponent implements OnInit {
  @Output() onSaved = new EventEmitter();

  constructor(
    private formBuilder: UntypedFormBuilder,
    private message: NzMessageService,
    private store: Store,
    private location: Location
  ) {
    super();
    this.form = this.formBuilder.group({
      confirm: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  Save(formValues: any): Observable<any> {
    return this.store.dispatch(new DeleteAccountAction(formValues)).pipe(
      tap(() => {
        this.location.back();
        this.message.success('Account deleted');
      })
    );
  }

  Cancel() {
    this.location.back();
  }
}
