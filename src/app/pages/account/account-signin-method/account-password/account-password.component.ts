import { Component, Input, OnInit } from '@angular/core';

import { CurrentUser } from '../../../../store/models';


@Component({
  selector: 'app-account-password',
  templateUrl: './account-password.component.html',
  styleUrls: ['./account-password.component.scss'],
})
export class AccountPasswordComponent implements OnInit {
  @Input() user!: CurrentUser | null | undefined;

  showUpdateForm = false;

  constructor() {}

  ngOnInit(): void {}
}
