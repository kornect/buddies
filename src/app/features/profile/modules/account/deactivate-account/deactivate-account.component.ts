import { Component, OnInit } from '@angular/core';

import { UserService } from 'data/user';

@Component({
  selector: 'app-deactivate-account',
  templateUrl: './deactivate-account.component.html',
  styleUrls: ['./deactivate-account.component.scss'],
})
export class DeactivateAccountComponent implements OnInit {
  user$ = this.userService.user$;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}
}
