import { Location } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';

import { Select, Store } from '@ngxs/store';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable, tap } from 'rxjs';

import { BaseFormComponent } from '@/app/common/forms';
import { Lookup } from '@/app/store/models';
import { LookupsState, ProfileState, UpdateProfileRelationshipAction } from '@/app/store/state';


@Component({
  selector: 'app-update-relationship-preference',
  templateUrl: './update-relationship-preference.component.html',
  styleUrls: ['./update-relationship-preference.component.scss'],
})
export class UpdateRelationshipPreferenceComponent extends BaseFormComponent implements OnInit {
  @Select(LookupsState.relationships) relationships$!: Observable<Lookup[]>;

  @Output() onSaved = new EventEmitter();

  constructor(
    private formBuilder: UntypedFormBuilder,
    private message: NzMessageService,
    private store: Store,
    private location: Location
  ) {
    super();
    this.form = this.formBuilder.group({
      seeking_relationship: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    const profile = this.store.selectSnapshot(ProfileState.profile);
    const seeking_relationship = profile?.seeking_relationship?.split(',');

    this.form.patchValue({ seeking_relationship });
  }

  Save(formValues: any): Observable<any> {
    const seeking_relationship = formValues.seeking_relationship.join(',');
    console.log(seeking_relationship);
    return this.store.dispatch(new UpdateProfileRelationshipAction({ seeking_relationship })).pipe(
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
