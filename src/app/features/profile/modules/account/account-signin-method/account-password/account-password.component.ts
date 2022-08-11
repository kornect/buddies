import { Component, Input, OnInit } from '@angular/core';

import { UserInfo } from 'data/user';

@Component({
  selector: 'app-account-password',
  templateUrl: './account-password.component.html',
  styleUrls: ['./account-password.component.scss'],
})
export class AccountPasswordComponent implements OnInit {
  @Input() user!: UserInfo | null | undefined;

  showUpdateForm = false;
  constructor() {}

  ngOnInit(): void {}
}
