import { Component, OnInit } from '@angular/core';

import { environment } from 'env';

@Component({
  selector: 'app-ui-logo',
  templateUrl: './ui-logo.component.html',
  styleUrls: ['./ui-logo.component.scss'],
})
export class UiLogoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  getAppName() {
    return environment.appName;
  }
}
