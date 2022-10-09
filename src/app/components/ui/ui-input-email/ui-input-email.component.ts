import { Component, Input, Optional, Self } from '@angular/core';
import { ControlContainer, FormGroupDirective, NgControl } from '@angular/forms';

import { NOOP_VALUE_ACCESSOR } from '@/app/components/ui/noop-value-accessor';


@Component({
  selector: 'ui-input-email, [ui-input-email]',
  templateUrl: './ui-input-email.component.html',
  styleUrls: ['./ui-input-email.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class UiInputEmailComponent {
  @Input() autocomplete = 'new-email';
  @Input() label = 'Email';
  @Input() showStrength = false;
  @Input() maxlength!: number;
  @Input() minlength!: number;
  @Input() placeholder = ' ';

  constructor(@Self() @Optional() public ngControl: NgControl) {
    if (this.ngControl) {
      // Note: we provide the value accessor through here, instead of
      // the `providers` to avoid running into a circular import.
      // And we use NOOP_VALUE_ACCESSOR so WrappedInput don't do anything with NgControl
      this.ngControl.valueAccessor = NOOP_VALUE_ACCESSOR;
    }
  }
}
