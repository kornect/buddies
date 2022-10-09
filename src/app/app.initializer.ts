import { Store } from '@ngxs/store';
import { debounceTime, finalize, from, switchMap } from 'rxjs';

import { NHostService } from '@/app/common/nhost';
import { InitThemeAction } from '@/app/store/state';

export function appInitializer(hostService: NHostService, store: Store): any {
  return () => {
    return new Promise((resolve) => {
      from(hostService.auth.isAuthenticatedAsync())
        .pipe(
          switchMap((isAuthenticated) => {
            return store.dispatch([new InitThemeAction()]);
          }),
          finalize(() => resolve({})),
          debounceTime(500)
        )
        .subscribe();
    });
  };
}
