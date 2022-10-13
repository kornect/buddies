import { Component, OnInit } from '@angular/core';

import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { SessionUser } from '@/app/store/models';
import { SessionState } from '@/app/store/state';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Select(SessionState.user) user$!: Observable<SessionUser>;

  constructor() {}

  ngOnInit(): void {}
}
