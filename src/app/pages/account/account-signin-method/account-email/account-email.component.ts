import { Component, Input, OnInit } from '@angular/core';

import { CurrentUser } from '../../../../store/models';


@Component({
  selector: 'app-account-email',
  templateUrl: './account-email.component.html',
  styleUrls: ['./account-email.component.scss'],
})
export class AccountEmailComponent implements OnInit {
  @Input() user!: CurrentUser | null | undefined;

  showUpdateForm = false;

  constructor() {}

  ngOnInit(): void {}
}
