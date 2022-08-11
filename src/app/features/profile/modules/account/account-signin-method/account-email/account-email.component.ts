import { Component, Input, OnInit } from '@angular/core';

import { UserInfo } from 'data/user';

@Component({
  selector: 'app-account-email',
  templateUrl: './account-email.component.html',
  styleUrls: ['./account-email.component.scss'],
})
export class AccountEmailComponent implements OnInit {
  @Input() user!: UserInfo | null | undefined;

  showUpdateForm = false;
  constructor() {}

  ngOnInit(): void {}
}
