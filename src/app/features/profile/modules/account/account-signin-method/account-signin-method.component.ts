import { Component, Input, OnInit } from '@angular/core';

import { UserInfo, UserService } from 'data/user';

@Component({
  selector: 'app-account-signin-method',
  templateUrl: './account-signin-method.component.html',
  styleUrls: ['./account-signin-method.component.scss'],
})
export class AccountSigninMethodComponent implements OnInit {
  user$ = this.userService.user$;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}
}
