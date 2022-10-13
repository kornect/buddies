import { Location } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';

import { Store } from '@ngxs/store';
import { addYears } from 'date-fns';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable, tap } from 'rxjs';

import { BaseFormComponent, mustBeYearsOld } from '@/app/common/forms';
import { InsertProfileAction, ProfileState } from '@/app/store/state';


@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.scss']
})
export class UpdateDetailsComponent extends BaseFormComponent implements OnInit {
  genders = [
    { label: 'Man', value: 'male' },
    { label: 'Woman', value: 'female' }
  ];

  @Output() onSaved = new EventEmitter();

  constructor(
    private formBuilder: UntypedFormBuilder,
    private message: NzMessageService,
    private store: Store,
    private location: Location
  ) {
    super();
    this.form = this.formBuilder.group({
      dateOfBirth: [addYears(new Date(), -18), [Validators.required, mustBeYearsOld<Date>(18)]],
      gender: [null, [Validators.required]],
      seekingGender: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
    const profile = this.store.selectSnapshot(ProfileState.profile);

    this.form.patchValue({
      gender: profile?.gender,
      seekingGender: profile?.seekingGender,
      dateOfBirth: profile?.dateOfBirth
    });

    if (profile?.dateOfBirth && profile.gender && profile.seekingGender) {
      this.form.disable();
    }
  }

  Save(formValues: any): Observable<any> {
    return this.store.dispatch(new InsertProfileAction(formValues)).pipe(
      tap(() => {
        this.location.back();
        this.message.success('Profile updated');
      })
    );
  }

  Cancel() {
    this.location.back();
  }

  isAllowedBirthDate(date: Date) {
    return date > addYears(new Date(), -18);
  }
}