import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { debounceTime, distinctUntilChanged } from 'rxjs';

import { PaginationSet } from './ui-pagination.model';


@UntilDestroy()
@Component({
  selector: 'app-ui-pagination',
  templateUrl: './ui-pagination.component.html',
  styleUrls: ['./ui-pagination.component.scss'],
})
export class UiPaginationComponent implements OnInit {
  @Input() pageSize!: number;
  @Input() pagination!: PaginationSet | null | undefined;
  @Input() hideOnEmpty = false;
  @Output() pageChanged = new EventEmitter<number>();
  @Output() sizeChanged = new EventEmitter<number>();

  searchControl!: UntypedFormControl;
  pageControl!: UntypedFormControl;

  constructor() {
    this.searchControl = new UntypedFormControl('');
    this.pageControl = new UntypedFormControl(10);
  }

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(untilDestroyed(this))
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((query) => {
        if (query) {
          this.setPage(+query);
          this.searchControl.reset();
        }
      });

    this.pageControl.valueChanges
      .pipe(untilDestroyed(this))
      .pipe(distinctUntilChanged())
      .subscribe((query) => {
        if (query) {
          if (this.pagination?.pageSize !== +query) {
            this.sizeChanged.emit(+query);
          }
        }
      });

    this.pageChanged.emit(1);
    this.sizeChanged.emit(10);
  }

  getPages(): number[] {
    const pages = new Array<number>();
    if (this.pagination?.pageCount === 0) {
      return pages;
    } else {
      for (let i = 0; i < (this.pagination?.pageCount ?? 0); i++) {
        pages.push(i + 1);
      }

      const pageIndex = pages.findIndex((x) => x === this.pagination?.currentPage);

      if (pageIndex < 5) {
        return pages.splice(0, 4);
      } else {
        return pages.splice(pageIndex - 2, pageIndex + 2);
      }
    }
  }

  setFirstPage(): void {
    if (this.pagination?.currentPage !== 1) {
      this.pageChanged.emit(1);
    }
  }

  prevPage(): void {
    if (this.pagination?.hasPreviousPage) {
      this.pageChanged.emit(this.pagination?.currentPage - 1);
    }
  }

  setPage(page: number): void {
    if (this.pagination?.currentPage !== page && page <= (this.pagination?.pageCount ?? 0)) {
      this.pageChanged.emit(page);
    }
  }

  isPageActive(page: number): boolean {
    return this.pagination?.currentPage === page;
  }

  nextPage(): void {
    if (this.pagination?.hasNextPage) {
      this.pageChanged.emit(this.pagination?.currentPage + 1);
    }
  }

  setLastPage(): void {
    if (this.pagination?.currentPage !== this.pagination?.pageCount) {
      this.pageChanged.emit(this.pagination?.pageCount);
    }
  }

  isHidden(): boolean {
    if (this.hideOnEmpty) {
      return this.pagination?.total === 0;
    }

    return this.hideOnEmpty;
  }
}
