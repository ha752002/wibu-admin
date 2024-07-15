import { Component, Input, OnInit } from '@angular/core';
import { IStoryInformation } from '../../../../manga-management.component';

@Component({
  selector: 'app-list-grid',
  templateUrl: './list-grid.component.html',
  styleUrl: './list-grid.component.scss'
})
export class ListGridComponent implements OnInit{
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
