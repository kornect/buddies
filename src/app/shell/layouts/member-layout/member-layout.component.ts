import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from 'data/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-member-layout',
  templateUrl: './member-layout.component.html',
  styleUrls: ['./member-layout.component.scss'],
})
export class MemberLayoutComponent implements OnInit {
  user$ = this.userService.user$;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  async onLogout() {
    await this.userService.logOut();
  }
}
