import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ui-sticky-nav',
  templateUrl: './ui-sticky-nav.component.html',
  styleUrls: ['./ui-sticky-nav.component.scss'],
})
export class UiStickyNavComponent implements OnInit {
  isSticky = false;

  constructor() {}

  ngOnInit(): void {}

  stickyChanged($event: boolean) {
    this.isSticky = $event;
  }
}