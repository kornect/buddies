import { Component, Input, Optional, Self } from '@angular/core';
import { ControlContainer, FormGroupDirective, NgControl } from '@angular/forms';



import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';



import { NOOP_VALUE_ACCESSOR } from '@/app/components/ui/noop-value-accessor';


// https://stackoverflow.com/questions/53099559/passing-a-formcontrol-to-a-child-component-no-value-accessor-for-form-control
// https://stackoverflow.com/questions/46141714/use-formcontrolname-for-custom-input-component-in-reactive-form/68353595#68353595

@Component({
  selector: 'ui-input-password, [ui-input-password]',
  templateUrl: './ui-input-password.component.html',
  styleUrls: ['./ui-input-password.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class UiInputPasswordComponent {
  @Input() autocomplete = 'new-password';
  @Input() label = 'Password';
  @Input() showStrength = false;
  @Input() maxlength!: number;
  @Input() minlength!: number;
  @Input() placeholder = ' ';
  showPassword = false;
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  constructor(@Self() @Optional() public ngControl: NgControl) {
    if (this.ngControl) {
      // Note: we provide the value accessor through here, instead of
      // the `providers` to avoid running into a circular import.
      // And we use NOOP_VALUE_ACCESSOR so WrappedInput don't do anything with NgControl
      this.ngControl.valueAccessor = NOOP_VALUE_ACCESSOR;
    }
  }
}
