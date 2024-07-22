import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapterRoutingModule } from './chapter-routing.module';
import { ChapterComponent } from './chapter.component';
import { ImgComponent } from '@app/shared/components/img/img.component';
import { IconComponent } from '@app/shared/components/icon/icon.component';


@NgModule({
  declarations: [
    ChapterComponent,
  ],
  imports: [
    CommonModule,
    ChapterRoutingModule,
    ImgComponent,
    IconComponent

  ]
})
export class ChapterModule { }
