import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { IStoryInformation } from '@app/modules/admin/modules/manga-management/type/manga.type';
import { Imeta } from '@app/modules/admin/types/meta.type';
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
  @Input() storyData?: IStoryInformation[] = [];
  @Input() meta?: Imeta;
  @Input() rowSize: number = 3;
  @Output() PageChange = new EventEmitter<number>();

  previewVisible = false;
  selectedStory?: IStoryInformation ;

  onPageChange(page: number): void {
    this.PageChange.emit(page);
  }

  selectStory(story: IStoryInformation): void {
    this.previewVisible = !this.previewVisible;
    this.selectedStory = story
  }

  handleVisible(value: boolean) {
    this.previewVisible = value;
  }
}
