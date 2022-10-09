import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';


@UntilDestroy()
@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
})
export class BaseLayoutComponent implements OnInit {
  showMessage = false;
  messageText = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.pipe(untilDestroyed(this)).subscribe((params) => {
      const { error, errorDescription } = params;

      if (error && errorDescription) {
        this.showErrorMesssage(errorDescription);
      }
    });
  }

  showErrorMesssage(errorDescription: string) {
    this.messageText = errorDescription;
    this.showMessage = true;
  }

  close() {
    this.messageText = '';
    this.showMessage = false;
  }
}
