import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { debounceTime, distinctUntilChanged } from 'rxjs';


@UntilDestroy()
@Component({
  selector: 'app-ui-search',
  templateUrl: './ui-search.component.html',
  styleUrls: ['./ui-search.component.scss'],
})
export class UiSearchComponent implements OnInit {
  @Input() helperText = '';
  @Input() placeholder = 'Search';
  @Input() searchString = '';
  @Input() debounce: number = 600;
  @Output() search = new EventEmitter<string>();

  searchControl!: UntypedFormControl;
  showHelperText = false;

  constructor() {
    this.searchControl = new UntypedFormControl('');
  }

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(untilDestroyed(this))
      .pipe(debounceTime(this.debounce), distinctUntilChanged())
      .subscribe((query) => {
        this.search.emit(query);
      });

    this.searchControl.setValue(this.searchString);

    this.showHelper('');
  }

  showHelper(search: string) {
    if (search) {
      this.showHelperText = false;
    } else this.showHelperText = !!this.helperText;
  }
}
