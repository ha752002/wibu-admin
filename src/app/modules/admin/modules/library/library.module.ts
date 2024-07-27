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


@NgModule({
  declarations: [
    LibraryComponent,
    GenreListComponent,
    AuthorListComponent
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    InputFieldComponent,
    OpenFormComponent,
    NzButtonModule,
    IconComponent
  ]
})
export class LibraryModule { }
