export interface User {
  updatedAt: Date;
  phoneNumberVerified: boolean;
  phoneNumber: string | null;
  newEmail: any | null;
  lastSeen: any | null;
  emailVerified: boolean;
  email: any | null;
  displayName: string | null;
  createdAt: Date;
  avatarUrl: string;
  avatar: any | null;
  activeMfaType: string | null;
  defaultRole: string;
  disabled: boolean;
  id: string;
}
