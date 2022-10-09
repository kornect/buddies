import { Component, Input, Optional, Self } from '@angular/core';
import { ControlContainer, FormGroupDirective, NgControl } from '@angular/forms';

import { NOOP_VALUE_ACCESSOR } from '@/app/components/ui/noop-value-accessor';


@Component({
  selector: 'ui-input-error',
  templateUrl: './ui-input-error.component.html',
  styleUrls: ['./ui-input-error.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class UiInputErrorComponent {
  @Input() error: string = '';
  @Input() errorMessage: string = '';

  constructor(@Self() @Optional() public ngControl: NgControl) {
    if (this.ngControl) {
      // Note: we provide the value accessor through here, instead of
      // the `providers` to avoid running into a circular import.
      // And we use NOOP_VALUE_ACCESSOR so WrappedInput don't do anything with NgControl
      this.ngControl.valueAccessor = NOOP_VALUE_ACCESSOR;
    }
  }

  hasError(): boolean {
    const inputControl = this.ngControl?.control;
    if (inputControl) {
      return (inputControl.touched || inputControl?.dirty) && inputControl?.hasError(this.error);
    }
    return false;
  }
}
