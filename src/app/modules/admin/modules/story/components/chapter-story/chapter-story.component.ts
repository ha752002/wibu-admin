import { Component, Input } from '@angular/core';
import { IChapter } from '@app/shared/components/open-form/types/chapter.type';
import { IStoryInformation } from '../../type/story.type';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-chapter-story',
  templateUrl: './chapter-story.component.html',
  styleUrl: './chapter-story.component.scss'
})
export class ChapterStoryComponent {
  @Input() storyData?: IStoryInformation
  constructor(private route: ActivatedRoute, private router: Router) { }

  navigateToChapter(chapterId?: string) {
    if (this.storyData?.id) {
      this.router.navigate([`admin/chapter/${chapterId}`]);
    }
  }
}
