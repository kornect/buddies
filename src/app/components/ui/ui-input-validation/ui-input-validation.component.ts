import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ValidationMessage } from './validation-message';


@Component({
  selector: 'ui-input-validation',
  templateUrl: './ui-input-validation.component.html',
  styleUrls: ['./ui-input-validation.component.scss'],
})
export class UiInputValidation {
  public messages: Array<ValidationMessage>;
  @Input() showClose = true;
  @Input() errorTitle = 'Submit Error';
  @Output() close = new EventEmitter();

  constructor() {
    this.messages = [];
  }

  @Input()
  set errors(messages: Array<ValidationMessage>) {
    this.messages = messages;
  }

  onClose(): void {
    this.messages = [];
    this.close.emit({});
  }
}
