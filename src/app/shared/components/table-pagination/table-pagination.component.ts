import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PaginatedList } from '@models/paginated-list';

@Component({
  selector: 'app-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.scss']
})
export class TablePaginationComponent {
  @Input() public paginatedList: PaginatedList<any> | null = null;

  @Output() public pageChange: EventEmitter<number> = new EventEmitter<number>();

  setPage(page: number): void {
    this.pageChange.emit(page);
  }

  get collectionSize(): number {
    return this.paginatedList?.totalItems ?? 0;
  }

  get currentPage(): number {
    return this.paginatedList?.currentPage ?? 1;
  }

  get pageSize(): number {
    return this.paginatedList?.pageSize ?? 0;
  }

  get hasItems(): boolean {
    return this.paginatedList?.results!.length! > 0 ?? false;
  }
}
