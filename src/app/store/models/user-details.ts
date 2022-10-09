import { SessionUser } from '@/app/store/models/session-user';
import { UserPhoto } from '@/app/store/models/user-photo';
import { UserProfile } from '@/app/store/models/user-profile';

export interface UserDetails extends SessionUser, UserProfile {
  photos: UserPhoto[];
}
