import { Component, OnInit } from '@angular/core';

import { UserState } from 'domain/state';


@Component({
  selector: 'app-account-signin-method',
  templateUrl: './account-signin-method.component.html',
  styleUrls: ['./account-signin-method.component.scss'],
})
export class AccountSigninMethodComponent implements OnInit {
  user$ = this.userState.user$;

  constructor(private userState: UserState) {}

  ngOnInit(): void {}
}
