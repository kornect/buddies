import { UserLocation } from '@/app/store/models/user-location';

import { GenderEnum } from './gender-enum';

export interface UserProfile extends UserLocation {
  gender: GenderEnum;
  seekingGender: GenderEnum;
  dateOfBirth: Date;
  bio: string;
  interests: string;
  ethnicGroup: number | null;
  maritalStatus: number | null;
  updatedAt: Date;
}
