import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IStoryInformation } from '@app/modules/admin/modules/story/type/story.type';
import { ItemAuthorComponent } from '@app/shared/components/item-author/item-author.component';
import { OpenFormComponent } from '@app/shared/components/open-form/open-form.component';
import { OpenModalComponent } from '@app/shared/components/open-modal/open-modal.component';
import { PreviewTheStoryComponent } from '@app/shared/components/preview-the-story/preview-the-story.component';
import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-list-table',
  standalone: true,
  imports: [
    CommonModule,
    NzTableModule,
    OpenFormComponent,
    OpenModalComponent,
    PreviewTheStoryComponent,
    ItemAuthorComponent
  ],
  templateUrl: './list-table.component.html',
  styleUrl: './list-table.component.scss'
})
export class ListTableComponent {
  @Input() storyData?: IStoryInformation[] = [];

  previewVisible = false;
  selectedStory: IStoryInformation = {};

  selectStory(user: IStoryInformation): void {
    this.previewVisible = !this.previewVisible;
    this.selectedStory = user
  }

  handleVisible(value: boolean) {
    this.previewVisible = value;
  }

}
