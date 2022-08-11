import { Injectable } from '@angular/core';

import { createStore, select, withProps } from '@ngneat/elf';
import { withRequestsCache, withRequestsStatus } from '@ngneat/elf-requests';
import { User } from 'core/services/nhost';

export interface UserInfo extends User {}

export interface UserProps {
  user: UserInfo | null | undefined;
}

export const userStore = createStore(
  { name: 'user' },
  withProps<UserProps>({
    user: null,
  }),
  withRequestsCache<'user'>(),
  withRequestsStatus<'user'>()
);

@Injectable({ providedIn: 'root' })
export class UserState {
  user$ = userStore.pipe(select((x) => x.user));
}
