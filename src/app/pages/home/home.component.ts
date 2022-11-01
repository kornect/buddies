import { Component, OnInit } from '@angular/core';

import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { User } from '@/app/store/models';
import { UserState } from '@/app/store';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Select(UserState.user) user$!: Observable<User>;

  constructor() {
  }

  ngOnInit(): void {
  }
}
