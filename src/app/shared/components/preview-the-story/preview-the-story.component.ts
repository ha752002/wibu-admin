import { CommonModule } from '@angular/common';
import { Component, Input, Pipe } from '@angular/core';
import { IStoryInformation } from '@app/modules/admin/modules/manga-management/manga-management.component';
import { NzButtonModule } from 'ng-zorro-antd/button';


@Component({
  selector: 'app-preview-the-story',
  standalone: true,
  imports: [
    CommonModule,
    NzButtonModule,
  ],
  templateUrl: './preview-the-story.component.html',
  styleUrl: './preview-the-story.component.scss'
})


export class PreviewTheStoryComponent {
  @Input() storyData?: IStoryInformation;

}
