import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { GenreService } from '@app/shared/services/genre/genre.service';
import { StoryService } from '@app/shared/services/story/story.service';
import { ActivatedRoute } from '@angular/router';
import { IStoryInformation } from './type/story.type';
import { EStory } from '@app/core/enums/story.enum';
import { EventService } from '../../services/event/event.service';
@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrl: './story.component.scss'
})
export class StoryComponent implements OnInit, OnDestroy {
  storyData?: IStoryInformation = {}
  EStory = EStory;
  selectedTitle: string = EStory.Story;
  contents: EStory[] = [EStory.Story, EStory.Chapter];
  private subscriptions: Subscription = new Subscription();
  private eventSubscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private genreService: GenreService,
    private storyService: StoryService,
    private eventService: EventService,
  ) {
  }

  ngOnInit(): void {
    this.eventSubscription = this.eventService.event$.subscribe(() => {
      this.getId();
    });
    this.getId()
  }

  getId() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.getStoryById(id)
    });
  }

  getStoryById(id: string): void {
    this.subscriptions.add(
      this.storyService.getStoryById(id).pipe(
        finalize(() => {
        })
      ).subscribe(
        response => {
          this.storyData = response.data;
        },
        error => {
          console.error('Error loading storys', error);
        }
      )
    );
  }

  changeTitle(titleContent: string) {
    this.selectedTitle = titleContent
  }

  ngOnDestroy() {
    if (this.eventSubscription) {
      this.eventSubscription.unsubscribe();
    }
  }
}
