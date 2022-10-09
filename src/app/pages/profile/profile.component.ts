import { Component, OnInit } from '@angular/core';

import { UserState } from 'domain/state';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user$ = this.userState.user$;

  constructor(private userState: UserState) {}

  ngOnInit(): void {}
}
