import { Location } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';

import { Store } from '@ngxs/store';
import { addYears } from 'date-fns';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable, tap } from 'rxjs';

import { BaseFormComponent, mustBeYearsOld } from '@/app/common/forms';
import { Genders_Enum } from '@/app/graphql';
import { InsertProfileAction, ProfileState } from '@/app/store/state';


@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.scss'],
})
export class UpdateDetailsComponent extends BaseFormComponent implements OnInit {
  genders = [
    { label: 'Man', value: Genders_Enum.Man },
    { label: 'Woman', value: Genders_Enum.Woman },
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
      date_of_birth: [addYears(new Date(), -18), [Validators.required, mustBeYearsOld<Date>(18)]],
      gender: [null, [Validators.required]],
      interested_in_gender: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    const profile = this.store.selectSnapshot(ProfileState.profile);

    this.form.patchValue(Object.assign({}, profile));

    if (profile?.date_of_birth && profile.gender && profile.interested_in_gender) {
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
