import { Location } from '@/app/store/models/location';

export interface UserLocation {
  area: string;
  city: string;
  province: string;
  country: string;
  location: Location;
}
