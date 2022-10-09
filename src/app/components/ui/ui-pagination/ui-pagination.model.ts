export interface PaginationSet {
  currentPage: number;
  pageCount: number;
  pageSize: number;
  total: number;
  from: number;
  to: number;
  firstRowOnPage: number;
  lastRowOnPage: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface PagedResponse<E> {
  data: E[];
  count: number;
  pageNumber: number;
  pageSize: number;
}

export interface PaginationResults<E> extends PaginationSet {
  data: E[];
}

export class PagingResults<T> implements PaginationResults<T> {
  private readonly _currentPage: number;
  private readonly _data: T[];
  private readonly _from: number;
  private readonly _pageCount: number;
  private readonly _pageSize: number;
  private readonly _to: number;
  private readonly _total: number;

  constructor(results: T[], rowCount: number, currentPage: number, pageSize: number) {
    this._data = results ?? [];
    this._currentPage = parseInt(currentPage + '');
    this._total = parseInt(rowCount + '');
    this._pageSize = parseInt(pageSize + '');

    this._pageCount = Math.ceil(this._total / this._pageSize);
    this._from = (this._currentPage - 1) * this._pageSize + 1;
    this._to =
      this._total <= parseInt(this._pageSize + '')
        ? this._total
        : this._from == this.total
        ? this._from
        : this._from + this._pageSize - 1;

    if (this._to > this._total) {
      this._to = this._total;
    }
  }

  get currentPage(): number {
    return this._currentPage;
  }

  get data(): T[] {
    return this._data;
  }

  get firstRowOnPage(): number {
    return (this._currentPage - 1) * this._pageSize + 1;
  }

  get from(): number {
    return this._from;
  }

  get hasNextPage(): boolean {
    return this._currentPage < this._pageCount;
  }

  get hasPreviousPage(): boolean {
    return this._currentPage > 1;
  }

  get lastRowOnPage(): number {
    return Math.min(this._currentPage * this._pageSize, this._total);
  }

  get pageCount(): number {
    return this._pageCount;
  }

  get pageSize(): number {
    return this._pageSize;
  }

  get to(): number {
    return this._to;
  }

  get total(): number {
    return this._total;
  }
}
