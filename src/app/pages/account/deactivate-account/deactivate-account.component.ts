import { Component, OnInit } from '@angular/core';

import { UserState } from 'domain/state';


@Component({
  selector: 'app-deactivate-account',
  templateUrl: './deactivate-account.component.html',
  styleUrls: ['./deactivate-account.component.scss'],
})
export class DeactivateAccountComponent implements OnInit {
  user$ = this.userState.user$;
  showUpdateForm = false;

  constructor(private userState: UserState) {}

  ngOnInit(): void {}
}
