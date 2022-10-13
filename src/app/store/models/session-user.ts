import { User } from '@/app/common/nhost';


export interface SessionUser extends User {
  photoUrl: string;
  lastSeen: Date;
  newEmail: string;
  updatedAt: Date;
}
