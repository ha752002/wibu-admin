import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoryRoutingModule } from './story-routing.module';
import { StoryComponent } from './story.component';
import { StoryDetailsComponent } from './components/story-details/story-details.component';
import { ImgComponent } from '@app/shared/components/img/img.component';
import { OpenFormComponent } from '@app/shared/components/open-form/open-form.component';


@NgModule({
  declarations: [
    StoryComponent,
    StoryDetailsComponent
  ],
  imports: [
    CommonModule,
    StoryRoutingModule,
    ImgComponent,
    OpenFormComponent
  ]
})
export class StoryModule { }
