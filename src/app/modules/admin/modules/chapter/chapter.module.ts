import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapterRoutingModule } from './chapter-routing.module';
import { ChapterComponent } from './chapter.component';
import { ImgComponent } from '@app/shared/components/img/img.component';
import { IconComponent } from '@app/shared/components/icon/icon.component';
import { OpenFormComponent } from '@app/shared/components/open-form/open-form.component';


@NgModule({
  declarations: [
    ChapterComponent,
  ],
  imports: [
    CommonModule,
    ChapterRoutingModule,
    ImgComponent,
    IconComponent,
    OpenFormComponent

  ]
})
export class ChapterModule { }
