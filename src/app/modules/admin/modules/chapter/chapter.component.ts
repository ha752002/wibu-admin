import { Component, Input } from '@angular/core';
import { IChapter } from '@app/shared/components/open-form/types/chapter.type';
import { Subscription } from 'rxjs';
import { ChapterService } from './services/chapter/chapter.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrl: './chapter.component.scss'
})
export class ChapterComponent {
  chapter: IChapter = {}

  private subscriptions: Subscription = new Subscription();

  constructor(private chapterService: ChapterService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.getId()
  }

  getId() {
    this.route.params.subscribe(params => {
      const chapterParam: string = params['chapterId'];
      if (chapterParam) {
        this.getChapterDetails(chapterParam)
      }
    });
  }

  getChapterDetails(id: string): void {
    this.subscriptions.add(
      this.chapterService.getChapterById(id).subscribe(
        (response) => {
          this.chapter = response.data;
        },
        (error) => {
          console.error('Error fetching author details:', error);
        }
      )
    );
  }

}
