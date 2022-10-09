import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { addYears, differenceInYears } from 'date-fns';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable, tap } from 'rxjs';
import { BaseFormComponent } from 'shared/ui/ui-forms';
import { mustBeYearsOld } from 'shared/ui/ui-forms/validators';
import { AttributesService } from '~/src/app/store/services/attributes.service';

import { UserProfileService } from 'domain/services/profile';


@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss'],
})
export class ProfileDetailsComponent extends BaseFormComponent implements OnInit {
  genders$ = this.attributesService.genders$;
  maritalStatuses$ = this.attributesService.maritalStatuses$;
  ethnicGroups$ = this.attributesService.ethnicGroups$;

  @Output() onSaved = new EventEmitter();

  optionalValues = false;

  constructor(
    private formBuilder: FormBuilder,
    private message: NzMessageService,
    private userProfileService: UserProfileService,
    private attributesService: AttributesService
  ) {
    super();
    this.form = this.formBuilder.group({
      gender: [null, [Validators.required]],
      seekingGender: [null, [Validators.required]],
      bio: [null, [Validators.required]],
      dateOfBirth: [addYears(new Date(), -18), [Validators.required, mustBeYearsOld<Date>(18)]],
      interests: [null],
      optionalValues: [false],
      maritalStatus: [null],
      ethnicGroup: [null],
    });
  }

  ngOnInit(): void {
    this.attributesService.getAll().subscribe();
  }

  Save(formValues: any): Observable<any> {
    return this.userProfileService.updateUserProfile(formValues).pipe(
      tap(() => {
        this.onSaved.emit();
      })
    );
  }

  isAllowedBirth = (current: Date): boolean => {
    return differenceInYears(new Date(), current) < 18;
  };
}
