import { ThemeService } from 'core/services/theme';
import { UserService } from 'data/user';

export function appInitializer(userService: UserService, themeService: ThemeService): any {
  return () => {
    return new Promise((resolve) => {
      themeService.init();
      userService.isAuthenticatedAsync().then(() => resolve({}));
    });
  };
}
