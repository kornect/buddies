import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-home',
  templateUrl: './member-home.component.html',
  styleUrls: ['./member-home.component.scss'],
})
export class MemberHomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick() {
    this.router.navigate(['members/account']);
  }
}
