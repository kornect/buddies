import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ui-sticky',
  templateUrl: './ui-sticky.component.html',
  styleUrls: ['./ui-sticky.component.scss']
})
export class UiStickyComponent  {
  @Output() stickyChanged = new EventEmitter<boolean>();
  isSticky: boolean = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 200;
    this.stickyChanged.emit(this.isSticky);
  }

}
