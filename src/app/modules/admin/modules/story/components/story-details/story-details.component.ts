import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IStoryInformation } from '../../type/story.type';

@Component({
  selector: 'app-story-details',
  templateUrl: './story-details.component.html',
  styleUrl: './story-details.component.scss'
})
export class StoryDetailsComponent implements OnInit {
  @Input() storyData?: IStoryInformation
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (this.storyData) {
        this.storyData.id = params['id'];
      }
    });
  }

  navigateToMangaWithId(genreId: string) {
    this.router.navigate(['admin/manga/', genreId]);
  }

}
