import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IStoryInformation } from '@app/modules/admin/modules/story/type/story.type';
import { StoryListComponent } from '@app/shared/components/story-list/story-list.component';
import { NzButtonModule } from 'ng-zorro-antd/button';

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
  @Input() intro?: string;
  @Input() storyPosted?: IStoryInformation[] = [];
  @Input() storyIsFollowing?: IStoryInformation[] = [];

  titles: string[] = []  
  selectedTitle: string = 'Intro';

  ngOnInit(): void {
    this.updateTitle();
    console.log(this.titles);
    this.titles.push('Story Posted');

  }

  selectTitle(title: string) {
    this.selectedTitle = title
  }

  private updateTitle(): void {
    this.titles = [];
    if (this.intro) {
      this.titles.push('Intro');
    }
    if (this.storyPosted && this.storyPosted.length > 0) {
      this.titles.push('Story Posted');
    }
    if (this.storyIsFollowing && this.storyIsFollowing.length > 0) {
      this.titles.push('Story Is Following');
    }
  }
}
