import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ValidationMessage } from './validation-message';

@Component({
  selector: 'form-summary',
  templateUrl: './validations.component.html',
  styleUrls: ['./validations.component.scss'],
})
export class ValidationsComponent {
  public messages: Array<ValidationMessage>;

  constructor() {
    this.messages = [];
  }

  @Input() showClose = true;
  @Input() errorTitle = 'Submit Error';

  @Input()
  set errors(messages: Array<ValidationMessage>) {
    this.messages = messages;
  }

  @Output() close = new EventEmitter();

  onClose(): void {
    this.messages = [];
    this.close.emit({});
  }
}
