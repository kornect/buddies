import { User } from '../../common/nhost';

export interface SessionUser extends User {
  photoUrl: string;
}
