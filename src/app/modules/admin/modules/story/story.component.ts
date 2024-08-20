import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { GenreService } from '@app/shared/services/genre/genre.service';
import { StoryService } from '@app/shared/services/story/story.service';
import { ActivatedRoute } from '@angular/router';
import { IStoryInformation } from './type/story.type';
@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrl: './story.component.scss'
})
export class StoryComponent implements OnInit{
  storyData?: IStoryInformation = {}
  private subscriptions: Subscription = new Subscription();

  constructor(private route: ActivatedRoute, private genreService: GenreService, private storyService: StoryService) {
  }

  ngOnInit(): void {
    this.getId()
  }

  getId() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.getStoryById(id)
    });
  }

  getStoryById(id : string| number): void {
    this.subscriptions.add(
      this.storyService.getStoryById(id).pipe(
        finalize(() => {
          console.log('storys loaded');
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
}
