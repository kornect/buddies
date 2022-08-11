import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-account',
  templateUrl: './member-account.component.html',
  styleUrls: ['./member-account.component.scss'],
})
export class MemberAccountComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick() {
    this.router.navigate(['members']);
  }
}
