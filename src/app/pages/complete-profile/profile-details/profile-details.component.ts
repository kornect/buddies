import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';

import { Store } from '@ngxs/store';
import { addYears } from 'date-fns';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable, tap } from 'rxjs';

import { BaseFormComponent, mustBeYearsOld } from '@/app/common/forms';
import { GetLookupsAction, UpdateProfileAction } from '@/app/store';


@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent extends BaseFormComponent implements OnInit {
  genders = [
    { label: 'Man', value: 'man' },
    { label: 'Woman', value: 'woman' }
  ];

  @Output() onSaved = new EventEmitter();

  constructor(private formBuilder: UntypedFormBuilder, private message: NzMessageService, private store: Store) {
    super();
    this.form = this.formBuilder.group({
      dateOfBirth: [addYears(new Date(), -18), [Validators.required, mustBeYearsOld<Date>(18)]],
      displayName: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      seekingGender: [null, [Validators.required]],
      bio: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.store.dispatch(new GetLookupsAction()).subscribe();
  }

  Save(formValues: any): Observable<any> {
    return this.store.dispatch(new UpdateProfileAction(formValues)).pipe(
      tap(() => {
        this.onSaved.emit();
      })
    );
  }

  isAllowedBirthDate(date: Date) {
    return date < addYears(new Date(), -18);
  }
}
