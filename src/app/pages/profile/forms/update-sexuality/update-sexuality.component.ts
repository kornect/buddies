import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BaseFormComponent } from '@/app/common/forms';
import { Select, Store } from '@ngxs/store';
import { LookupsState, ProfileState, UpdateProfileSexualityAction } from '@/app/store';
import { Observable, tap } from 'rxjs';
import { Lookup } from '@/app/store/models';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-sexuality',
  templateUrl: './update-sexuality.component.html',
  styleUrls: ['./update-sexuality.component.scss']
})
export class UpdateSexualityComponent extends BaseFormComponent implements OnInit {
  @Select(LookupsState.sexuality) sexuality$!: Observable<Lookup[]>;

  @Output() onSaved = new EventEmitter();

  constructor(
    private formBuilder: UntypedFormBuilder,
    private message: NzMessageService,
    private store: Store,
    private location: Location
  ) {
    super();
    this.form = this.formBuilder.group({
      sexuality: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
    const profile = this.store.selectSnapshot(ProfileState.profile);
    this.form.patchValue({ sexuality: profile?.sexuality });
  }

  Save(formValues: any): Observable<any> {
    return this.store.dispatch(new UpdateProfileSexualityAction(formValues)).pipe(
      tap(() => {
        this.location.back();
        this.message.success('Profile updated');
      })
    );
  }

  Cancel() {
    this.location.back();
  }
}
