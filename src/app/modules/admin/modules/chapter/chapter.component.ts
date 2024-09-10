import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChapterService } from './services/chapter/chapter.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';
import { EventService } from '../../services/event/event.service';
import { IChapterContent } from './types/chapter.type';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrl: './chapter.component.scss'
})
export class ChapterComponent implements OnInit , OnDestroy {
  chapter?: IChapterContent

  private subscriptions: Subscription = new Subscription();
  private eventSubscription!: Subscription;

  constructor(
    private chapterService: ChapterService,
    private route: ActivatedRoute,
    private eventService: EventService,
  ) { }

  ngOnInit(): void {
    this.eventSubscription = this.eventService.event$.subscribe(() => {
      this.getChapterId();
    });
    this.getChapterId()
  }

  getChapterId() {
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
  ngOnDestroy() {
    if (this.eventSubscription) {
      this.eventSubscription.unsubscribe();
    }
  }
}
