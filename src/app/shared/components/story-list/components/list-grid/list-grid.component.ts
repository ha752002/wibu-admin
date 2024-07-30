import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IStoryInformation } from '@app/modules/admin/modules/story/type/story.type';
import { OpenModalComponent } from '@app/shared/components/open-modal/open-modal.component';
import { PreviewTheStoryComponent } from '@app/shared/components/preview-the-story/preview-the-story.component';
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
    OpenModalComponent,
    PreviewTheStoryComponent,
  ],
  templateUrl: './list-grid.component.html',
  styleUrl: './list-grid.component.scss'
})
export class ListGridComponent {
  @Input() storyData: IStoryInformation[] = [];
  @Input() rowSize: 3 | 4 | 5 = 3;


  pageSize = 8;
  currentPage = 1;
  paginatedData: IStoryInformation[] = [];
  previewVisible = false;
  selectedStory: IStoryInformation = {};
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

  selectStory(story: IStoryInformation): void {
    this.previewVisible = !this.previewVisible;
    console.log(this.previewVisible);
    this.selectedStory = story
  }

  handleVisible(value: boolean) {
    this.previewVisible = value;
  }
}
