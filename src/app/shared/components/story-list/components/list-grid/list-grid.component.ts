import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IStoryInformation } from '@app/modules/admin/modules/manga-management/manga-management.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';

@Component({
  selector: 'app-list-grid',
  standalone: true,
  imports: [
    CommonModule,
    NzListModule,
    NzCardModule,
    NzPaginationModule,
  ],
  templateUrl: './list-grid.component.html',
  styleUrl: './list-grid.component.scss'
})
export class ListGridComponent {
  @Input() storyData: IStoryInformation[] = [];
  pageSize = 8; // Số lượng mục trên mỗi trang
  currentPage = 1;
  paginatedData: IStoryInformation[] = [];

  ngOnInit() {
    this.updatePaginatedData();
  }

  updatePaginatedData(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedData = this.storyData.slice(startIndex, endIndex);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.updatePaginatedData();
  }
}
