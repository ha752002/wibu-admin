import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { formNameTypes } from './open-form.types';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

import { AddUserFormComponent } from './components/add-user-form/add-user-form.component';
import { EditUserFormComponent } from './components/edit-user-form/edit-user-form.component';
import { AddStoryFormComponent } from './components/add-story-form/add-story-form.component';
import { EditStoryFormComponent } from './components/edit-story-form/edit-story-form.component';
import { DeleteFormComponent } from './components/delete-form/delete-form.component';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { IconComponent } from '../icon/icon.component';
import { IconNameTypes } from '../icon/icon.types';
import { AddChapterFormComponent } from './components/add-chapter-form/add-chapter-form.component';
import { AddAuthorFormComponent } from './components/add-author-form/add-author-form.component';
import { AddGenreFormComponent } from './components/add-genre-form/add-genre-form.component';
import { EditGenreFormComponent } from './components/edit-genre-form/edit-genre-form.component';
import { EditAuthorFormComponent } from './components/edit-author-form/edit-author-form.component';
import { EditChapterFormComponent } from './components/edit-chapter-form/edit-chapter-form.component';
import { IChapter } from './types/chapter.type';
import { IGenre } from './types/genre.type';
import { ICreateStory } from './types/story.type';
import { ICreateUser, IUpdateUser } from './types/user.type';
import { IAuthor } from './types/author.type';
import { AuthorService } from './services/author/author.service';

@Component({
  selector: 'app-open-form',
  standalone: true,
  imports: [
    CommonModule,
    NzButtonModule,
    IconComponent,
    AddUserFormComponent,
    EditUserFormComponent,
    AddStoryFormComponent,
    EditStoryFormComponent,
    DeleteFormComponent,
    AddChapterFormComponent,
    AddAuthorFormComponent,
    AddGenreFormComponent,
    EditGenreFormComponent,
    EditAuthorFormComponent,
    EditChapterFormComponent
  ],
  templateUrl: './open-form.component.html',
  styleUrl: './open-form.component.scss'
})
export class OpenFormComponent implements OnDestroy{
  @Input() formName: formNameTypes = 'add story';
  @Input() label: boolean = true;
  @Input() currentForm?: formNameTypes | null = null;
  @Input() icon: IconNameTypes = 'plus';
  @Input() buttonType: 'success' | 'warning' | 'danger' | 'default' = 'default';
  @Input() id?: number;
  @Input() img?: string;
  @Input() data?: ICreateStory | IChapter | IUpdateUser | ICreateUser |IGenre | IAuthor;
  @Input() delete:  'user' | 'story' | 'chapter' | 'author' | 'genre' = 'user';
  @Input() genre: IGenre[] =[];

  private subscriptions: Subscription = new Subscription();
  constructor(private authorService: AuthorService) { }

  openForm() {
    console.log(this.formName);
    this.currentForm = this.formName
  }

  closeForm() {
    this.currentForm = null
  }

  blockFormClosing(event: MouseEvent) {
    event.stopPropagation(); 
    console.log('Child clicked');
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
