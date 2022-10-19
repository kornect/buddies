import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-block-link',
  templateUrl: './block-link.component.html',
  styleUrls: ['./block-link.component.scss']
})
export class BlockLinkComponent implements OnInit {
  @Input() title: string = '';
  @Input() link: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
