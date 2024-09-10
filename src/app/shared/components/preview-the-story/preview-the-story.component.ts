import { CommonModule } from '@angular/common';
import { Component, Input, Pipe } from '@angular/core';
import { Router } from '@angular/router';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ItemAuthorComponent } from '../item-author/item-author.component';
import { IStoryInformation } from '@app/modules/admin/modules/manga-management/type/manga.type';


@Component({
  selector: 'app-preview-the-story',
  standalone: true,
  imports: [
    CommonModule,
    NzButtonModule,
    NzAvatarModule,
    ItemAuthorComponent
  ],
  templateUrl: './preview-the-story.component.html',
  styleUrl: './preview-the-story.component.scss'
})

export class PreviewTheStoryComponent {
  @Input() storyData?: IStoryInformation;

  constructor(private router: Router) {}

  viewStory() {
    if (this.storyData?.id) {
      this.router.navigate(['/admin/story', this.storyData.id]);
    }
  }

}
