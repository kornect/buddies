import { Component, Input } from '@angular/core';

import { UserInfo } from 'data/user';

@Component({
  selector: 'app-current-user, [app-current-user]',
  templateUrl: './current-user.component.html',
  styles: [':host { display:contents; width: 100%; }'],
})
export class CurrentUserComponent {
  @Input() user!: UserInfo | null | undefined;
  @Input() isReverse = false;
}
