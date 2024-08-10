import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { GenreSelectorComponent } from '@app/shared/components/genre-selector/genre-selector.component';
import { InputFieldComponent } from '@app/shared/components/input-field/input-field.component';
import { OpenModalComponent } from '@app/shared/components/open-modal/open-modal.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzUploadFile, NzUploadModule } from 'ng-zorro-antd/upload';
import { IGenre } from '../../types/genre.type';
import { ICreateStory } from '../../types/story.type';
import { AuthorSelectorComponent } from '@app/shared/components/author-selector/author-selector.component';
import { IAuthor } from '../../types/author.type';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { UploadAvatarComponent } from '@app/shared/components/upload-avatar/upload-avatar.component';
import { StoryService } from '../../services/story/story.service';



@Component({
  standalone: true,
  imports: [
    CommonModule,
    NzUploadModule,
    UploadAvatarComponent,
    InputFieldComponent,
    NzAvatarModule,
    NzButtonModule,
    OpenModalComponent,
    GenreSelectorComponent,
    AuthorSelectorComponent
  ],
  selector: 'app-add-story-form',
  templateUrl: './add-story-form.component.html',
  styleUrl: './add-story-form.component.scss'
})
export class AddStoryFormComponent implements OnInit{
  @Input() genre: IGenre[] = [];

  story: ICreateStory = {
    thumbnail: 'https://i.pinimg.com/564x/db/2e/9b/db2e9b90318548e2cde3edd6b908c6f0.jpg',
    genre:[],
    author:'',
  };
  status: string[] = ['Updating','Halt','Full'];
  selectedAuthors?: IAuthor;
  authorVisible = false;
  genreVisible = false;

  constructor(private storyService: StoryService) { }

  ngOnInit(): void {
    this.story.genre = this.genre
  }

  receiveThumbnail(url: string) {
    this.story.thumbnail  = url;
    console.log(this.story);
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.storyService.createStory(this.story).subscribe(
      (response) => {
        console.log('Story created successfully:', response);
      },
      (error) => {
        console.error('Error creating story:', error);
      }
    );
    console.log('Form submitted:', this.story);
  }

  onFieldValueChange(field: keyof ICreateStory, value: string | number | Date | undefined): void {
    console.log(this.story);
  }

  handleGenreVisible(value: boolean) {
    this.genreVisible = value;
  }

  handleAuthorVisible(value: boolean) {
    this.authorVisible = value;
  }

  onGenresSelected(genres: IGenre[]) {
    this.story.genre = genres;
  }

  onauthorsSelected(author: IAuthor) {
    this.selectedAuthors= author;
    this.story.author = author.name;
  }
}
