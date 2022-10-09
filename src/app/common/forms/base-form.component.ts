import { FormControl, FormGroup } from '@angular/forms';

import { Observable, catchError, finalize, tap } from 'rxjs';

export interface ValidationMessage {
  message: string;
}

export abstract class BaseFormComponent {
  public form!: FormGroup;
  public submitErrors!: Array<ValidationMessage>;
  public formSubmitting!: boolean;

  public hasErrors(): boolean {
    return this.submitErrors?.length > 0;
  }

  public clearErrors() {
    this.submitErrors = [];
  }

  public controlErrors(input: string): boolean {
    const inputControl = this.form.get(input);
    if (inputControl) {
      return !!inputControl.errors;
    } else {
      return false;
    }
  }

  public hasError(input: string, error: string): boolean {
    const inputControl = this.form.get(input);
    if (inputControl) {
      return (inputControl.touched || inputControl.dirty) && inputControl.hasError(error);
    } else {
      return false;
    }
  }

  public isValidating(input: string): boolean {
    const inputControl = this.form.get(input);
    if (inputControl) {
      return inputControl.pending;
    } else {
      return false;
    }
  }

  public hasChanged(): boolean {
    return this.form.touched && this.form.dirty;
  }

  public controlValue(input: string): any {
    return this.form!.get(input)!.value;
  }

  canDeactivate(): boolean {
    return !this.form.dirty;
  }

  public validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  public abstract Save(formValues: any): Observable<any>;

  public Submit($event: Event): void {
    $event.preventDefault();

    if (this.form.valid) {
      this.submitErrors = [];
      this.formSubmitting = true;

      this.Save(this.form.value)
        .pipe(
          finalize(() => (this.formSubmitting = false)),
          tap(() => this.form.reset({})),
          catchError((error) => {
            this.submitErrors = this.GetErrors(error);
            throw error;
          })
        )
        .subscribe();
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  GetErrors(formResponse: Error | any): Array<ValidationMessage> {
    const messages: Array<ValidationMessage> = [];
    if (formResponse && formResponse.error) {
      if (formResponse.error.errors) {
        formResponse.error.errors.forEach((error: string) => {
          messages.push({ message: error });
        });
      } else if (formResponse.error.error_description) {
        messages.push({
          message: formResponse.error.error_description,
        });
      }
    } else {
      messages.push({ message: (formResponse as Error)?.message });
    }

    if (messages.length === 0) {
      messages.push({ message: 'Unexpected request error occurred, please try again later' });
    }

    return messages;
  }
}
