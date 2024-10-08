import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TimeAgoPipe } from '@app/core/pipe/time-ago.pipe';
import { IStoryInformation } from '@app/modules/admin/modules/manga-management/type/manga.type';
import { Imeta } from '@app/modules/admin/types/meta.type';
import { ItemAuthorComponent } from '@app/shared/components/item-author/item-author.component';
import { OpenFormComponent } from '@app/shared/components/open-form/open-form.component';
import { OpenModalComponent } from '@app/shared/components/open-modal/open-modal.component';
import { PreviewTheStoryComponent } from '@app/shared/components/preview-the-story/preview-the-story.component';
import { SharedModule } from '@app/shared/shared.module';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-list-table',
  standalone: true,
  imports: [
    CommonModule,
    NzTableModule,
    SharedModule, 
    OpenFormComponent,
    OpenModalComponent,
    PreviewTheStoryComponent,
    ItemAuthorComponent,
    NzPaginationModule
  ],
  templateUrl: './list-table.component.html',
  styleUrl: './list-table.component.scss'
})
export class ListTableComponent {
  @Input() storyData?: IStoryInformation[] = [];
  @Input() meta?: Imeta;
  @Output() PageChange = new EventEmitter<number>();

  previewVisible = false;
  selectedStory?: IStoryInformation ;

  onPageChange(page: number): void {
    this.PageChange.emit(page);
  }

  selectStory(user: IStoryInformation): void {
    this.previewVisible = !this.previewVisible;
    this.selectedStory = user
    console.log(this.storyData);
    
  }

  handleVisible(value: boolean) {
    this.previewVisible = value;
    console.log(this.storyData);

  }

  identify(index: number, item: any): any {
    return item.id;
  }

}
