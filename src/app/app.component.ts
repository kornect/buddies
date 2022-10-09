import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';


@UntilDestroy()
@Component({
  selector: 'app-root, [app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
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
