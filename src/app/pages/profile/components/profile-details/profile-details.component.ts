import { Component, OnInit } from '@angular/core';

import { Select } from '@ngxs/store';
import { differenceInYears, format } from 'date-fns';
import { Observable } from 'rxjs';

import { User, UserProfile } from '@/app/store/models';
import { ProfileState, UserState } from '@/app/store';
import { isNullOrUndefined } from '@/app/utils';
import { Genders_Enum } from '@/app/graphql';


@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
  @Select(UserState.user) user$!: Observable<User | null>;
  @Select(ProfileState.profile) profile$!: Observable<UserProfile | null>;

  constructor() {
  }

  ngOnInit(): void {
  }

  getAge(dateOfBirth: Date | undefined) {
    if (isNullOrUndefined(dateOfBirth)) {
      return '...';
    }

    // @ts-ignore
    return differenceInYears(new Date(), new Date(dateOfBirth));
  }

  getGender(profile: UserProfile | undefined | null) {
    return profile?.gender === Genders_Enum.Man ? 'Male' : 'Female';
  }

  getDateOfBirth(dateOfBirth: Date | undefined) {
    if (isNullOrUndefined(dateOfBirth)) {
      return '...';
    }

    // @ts-ignore
    const date = new Date(dateOfBirth);

    // @ts-ignore
    return `${format(date, 'dd MMM yyyy')} (${differenceInYears(new Date(), date)} years)`;
  }

  getLocation(profile: UserProfile | undefined | null) {
    if (isNullOrUndefined(profile)) {
      return '...';
    }

    if (isNullOrUndefined(profile?.area) && isNullOrUndefined(profile?.province)) {
      return '...';
    }

    return `${profile?.area}, ${profile?.province}`;
  }
}
