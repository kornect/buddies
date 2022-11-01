import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';

import { Store } from '@ngxs/store';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable, tap } from 'rxjs';

import { BaseFormComponent } from '@/app/common/forms';
import { UpdateDisplayNameAction, UserState } from '@/app/store';


@Component({
  selector: 'app-update-display-name',
  templateUrl: './update-display-name.component.html',
  styleUrls: ['./update-display-name.component.scss']
})
export class UpdateDisplayNameComponent extends BaseFormComponent implements OnInit {
  constructor(
    private formBuilder: UntypedFormBuilder,
    private message: NzMessageService,
    private store: Store,
    private location: Location
  ) {
    super();
    this.form = this.formBuilder.group({
      displayName: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(60)]]
    });
  }

  ngOnInit(): void {
    this.form.patchValue({
      displayName: this.store.selectSnapshot(UserState.user)?.displayName
    });
  }

  Save(formValues: any): Observable<any> {
    return this.store.dispatch(new UpdateDisplayNameAction(formValues)).pipe(
      tap(() => {
        this.location.back();
        this.message.success('Display name updated successfully');
      })
    );
  }

  Cancel() {
    this.location.back();
  }
}
