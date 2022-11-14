import { Component } from '@angular/core';

import { environment } from '@/environments';


@Component({
  selector: 'app-ui-logo',
  templateUrl: './ui-logo.component.html',
  styleUrls: ['./ui-logo.component.scss']
})
export class UiLogoComponent {
  getAppName() {
    return environment.name;
  }
}
