import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { LibraryComponent } from './library.component';
import { GenreListComponent } from './components/genre-list/genre-list.component';
import { AuthorListComponent } from './components/author-list/author-list.component';
import { InputFieldComponent } from '@app/shared/components/input-field/input-field.component';
import { OpenFormComponent } from '@app/shared/components/open-form/open-form.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { IconComponent } from '@app/shared/components/icon/icon.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { TitlePageComponent } from '@app/shared/components/title-page/title-page.component';


@NgModule({
  declarations: [
    LibraryComponent,
    GenreListComponent,
    AuthorListComponent
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    NzPaginationModule,
    NzAvatarModule,
    InputFieldComponent,
    OpenFormComponent,
    NzButtonModule,
    IconComponent,
    TitlePageComponent
  ]
})
export class LibraryModule { }
