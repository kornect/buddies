import { Component, Input, OnInit } from '@angular/core';

import { isNullOrUndefined } from '@/app/utils';


@Component({
  selector: 'app-required-tag',
  templateUrl: './required-tag.component.html',
  styleUrls: ['./required-tag.component.scss'],
})
export class RequiredTagComponent implements OnInit {
  @Input() data: any;

  constructor() {}

  ngOnInit(): void {}

  isRequired() {
    return isNullOrUndefined(this.data);
  }
}
