import { NgModule } from '@angular/core';
import { MangaManagementComponent } from './manga-management.component';
import {
  MangaManagementRoutingModule
} from "@app/modules/admin/modules/manga-management/manga-management-routing.module";
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { IconComponent } from '@app/shared/components/icon/icon.component';
import { OpenFormComponent } from '@app/shared/components/open-form/open-form.component';
import { InputFieldComponent } from '@app/shared/components/input-field/input-field.component';
import { CommonModule } from '@angular/common';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { StoryListComponent } from '@app/shared/components/story-list/story-list.component';
import { OpenModalComponent } from '@app/shared/components/open-modal/open-modal.component';
import { GenreSelectorComponent } from '@app/shared/components/genre-selector/genre-selector.component';
import { TitlePageComponent } from '@app/shared/components/title-page/title-page.component';


@NgModule({
  declarations: [
    MangaManagementComponent,
  ],
  imports: [
    CommonModule,
    MangaManagementRoutingModule,
    
    NzDividerModule,
    NzAvatarModule,
    IconComponent,
    OpenFormComponent,
    InputFieldComponent,
    StoryListComponent,
    StoryListComponent,
    NzListModule,
    NzCardModule,
    NzPaginationModule,
    OpenModalComponent,
    GenreSelectorComponent,
    TitlePageComponent
  ]
})
export class MangaManagementModule {
}
