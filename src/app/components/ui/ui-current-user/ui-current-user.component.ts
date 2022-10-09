import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { SessionUser } from '@/app/store/models';


@Component({
  selector: 'app-ui-current-user, [app-ui-current-user]',
  templateUrl: './ui-current-user.component.html',
  styles: [':host { display:contents; width: 100%; }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiCurrentUserComponent {
  @Input() showEmail = false;
  @Input() size: 'small' | 'medium' | 'large' = 'small';
  @Input() user!: SessionUser | null | undefined;
  @Input() isReverse = false;
}
