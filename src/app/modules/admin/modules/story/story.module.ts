import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoryRoutingModule } from './story-routing.module';
import { StoryComponent } from './story.component';
import { StoryDetailsComponent } from './components/story-details/story-details.component';
import { ImgComponent } from '@app/shared/components/img/img.component';
import { OpenFormComponent } from '@app/shared/components/open-form/open-form.component';
import { ItemAuthorComponent } from '@app/shared/components/item-author/item-author.component';
import { ChapterStoryComponent } from './components/chapter-story/chapter-story.component';
import { TitlePageComponent } from '@app/shared/components/title-page/title-page.component';


@NgModule({
  declarations: [
    StoryComponent,
    StoryDetailsComponent,
    ChapterStoryComponent
  ],
  imports: [
    CommonModule,
    StoryRoutingModule,
    ImgComponent,
    OpenFormComponent,
    ItemAuthorComponent,
    TitlePageComponent
  ]
})
export class StoryModule { }
