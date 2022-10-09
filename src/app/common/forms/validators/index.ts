import { AbstractControl, ValidatorFn } from '@angular/forms';

import { differenceInYears } from 'date-fns';


/**
 * Validates that the control value is at least the specified number of years old.
 */
export function mustBeYearsOld<T extends Date | number>(expectedYears: number): ValidatorFn {
  return (control: AbstractControl) => {
    const value = control.value as T;
    if (value) {
      if (value instanceof Date) {
        const years = differenceInYears(new Date(), value);
        if (years < expectedYears) {
          return {
            expectedYears: true,
          };
        }
      } else if (typeof value === 'number') {
        if (value < expectedYears) {
          return {
            expectedYears: true,
          };
        }
      }
    }

    return null;
  };
}
