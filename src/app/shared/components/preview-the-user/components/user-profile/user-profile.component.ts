import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { EFilterOperation } from '@app/core/enums/operation.enums';
import { IStoryInformation } from '@app/modules/admin/modules/manga-management/type/manga.type';
import { EventService } from '@app/modules/admin/services/event/event.service';
import { IFilter, Imeta } from '@app/modules/admin/types/meta.type';
import { IQueryParams } from '@app/modules/admin/types/query-params.type';
import { StoryListComponent } from '@app/shared/components/story-list/story-list.component';
import { StoryService } from '@app/shared/services/story/story.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { finalize, Subscription } from 'rxjs';
import { ITitle } from '../../type/user.types';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    NzButtonModule,
    StoryListComponent
  ],
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
  @Input() id?: string = '';
  // storyWriting: IStoryInformation[] = [];
  // storyPosted: IStoryInformation[] = [];
  // storyIsFollowing: IStoryInformation[] = [];
  storys: IStoryInformation[] = [];
  meta?: Imeta

  titles: ITitle[] = [
    { title: 'story writing', titleValue: 'author', },
    { title: 'Story Posted', titleValue: 'publisher', },
    { title: 'Story Is Following', titleValue: 'user', },
  ]
  selectedTitle: string = 'story writing';

  private subscriptions: Subscription = new Subscription();
  private eventSubscription!: Subscription;

  itemFilter: IFilter = {
    value: '',
    operation: EFilterOperation.MATCH,
    target: ''
  };

  ConfigurationParams: IQueryParams = {
    pageNumber: 1,
    pageSize: 8,
    filterRules: '',
    sortType: '',
    sortBy: ''
  }

  constructor(
    private eventService: EventService,
    private storyService: StoryService
  ) { }

  ngOnInit(): void {
    this.getStorysByCategory(this.selectedTitle)
  }

  selectTitle(title: ITitle) {
    this.selectedTitle = title.title;
    this.getStorysByCategory(this.selectedTitle)
  }

  // private updateTitle(): void {
  //   this.titles = [];
  //   if (this.storyWriting&& this.storyPosted.length > 0) {
  //     this.titles.push('story writing');
  //   }
  //   if (this.storyPosted && this.storyPosted.length > 0) {
  //     this.titles.push('Story Posted');
  //   }
  //   if (this.storyIsFollowing && this.storyIsFollowing.length > 0) {
  //     this.titles.push('Story Is Following');
  //   }
  // }

  getStorysByCategory(target: string): void {
    this.itemFilter.target = target;
    this.itemFilter.value = this.id;
    const encodedData = encodeURIComponent(JSON.stringify(this.itemFilter))

    this.ConfigurationParams.filterRules = encodedData;

    this.getStorys();
  }

  getStorys(): void {
    // this.storys = []
    this.subscriptions.add(
      this.storyService.getAllStorys(this.ConfigurationParams).pipe(
        finalize(() => {
        })
      ).subscribe(
        response => {
          this.storys = response.data;
          this.meta = response.meta;
        },
        error => {
          console.error('Error loading storys', error);
        }
      )
    );
  }

  onPageChange(page: number): void {
    this.ConfigurationParams.pageNumber = page;
    this.getStorys()
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    if (this.eventSubscription) {
      this.eventSubscription.unsubscribe();
    }
  }
}
