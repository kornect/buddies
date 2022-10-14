import * as Types from '@/app/graphql/types';

export interface UserProfile {
  area: string | null;
  bio: string | null;
  city: string | null;
  country: string | null;
  created_at: Date;
  date_of_birth: any;
  gender: Types.Genders_Enum;
  id: string;
  interested_in_gender: Types.Genders_Enum;
  location: Location | null;
  province: string | null;
  seeking_relationship: string | null;
  sexuality: Types.Sexuality_Enum | null;
  updated_at: Date;
}
