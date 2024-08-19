import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NzUploadFile, NzUploadModule } from 'ng-zorro-antd/upload';
import { InputFieldComponent } from '@app/shared/components/input-field/input-field.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { OpenModalComponent } from '@app/shared/components/open-modal/open-modal.component';
import { GenreSelectorComponent } from '@app/shared/components/genre-selector/genre-selector.component';
import { IGenre } from '../../types/genre.type';
import { ICreateStory } from '../../types/story.type';
import { UploadAvatarComponent } from '@app/shared/components/upload-avatar/upload-avatar.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { AuthorSelectorComponent } from '@app/shared/components/author-selector/author-selector.component';
import { IAuthor } from '../../types/author.type';
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
  selector: 'app-edit-story-form',
  templateUrl: './edit-story-form.component.html',
  styleUrl: './edit-story-form.component.scss'
})
export class EditStoryFormComponent implements OnInit {
  @Input() id?: string;
  @Input() img?: string;


  story: ICreateStory = {
    name: 'Triệu Hồi Đến Thế Giới Fantasy',
    genre: [{title: 'ksssksk'}],
    author:'',
  };

  status: string[] = ['Updating', 'Halt', 'Full'];
  selectedAuthors?: IAuthor;
  authorVisible = false;
  genreVisible = false;

  constructor(private storyService: StoryService) { }

  ngOnInit(): void {
    if (this.img) {
      this.story.thumbnail = this.img
    }
  }

  receiveThumbnail(url: string) {
    this.story.thumbnail  = url;
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.id) {
      this.storyService.updateStory(this.id, this.story).subscribe(
        (response) => {
        },
        (error) => {
          console.error('Error updating story:', error);
        }
      );
    }
  }

  onFieldValueChange(field: keyof ICreateStory, value: string | number | Date | undefined): void {
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
