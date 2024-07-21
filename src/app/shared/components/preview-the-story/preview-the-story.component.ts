import { CommonModule } from '@angular/common';
import { Component, Input, Pipe } from '@angular/core';
import { Router } from '@angular/router';
import { IStoryInformation } from '@app/modules/admin/modules/story/story.component';
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

  constructor(private router: Router) {}


  viewStory() {
    if (this.storyData?.id) {
      this.router.navigate(['/admin/story', this.storyData.id]);
    }
  }

}
