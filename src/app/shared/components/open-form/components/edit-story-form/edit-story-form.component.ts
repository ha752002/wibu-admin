import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
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
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { IPage, IResponseImage } from '@app/shared/types/image.types';
import { NzMessageService } from 'ng-zorro-antd/message';

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
    AuthorSelectorComponent,
    FormsModule,

  ],
  selector: 'app-edit-story-form',
  templateUrl: './edit-story-form.component.html',
  styleUrl: './edit-story-form.component.scss'
})
export class EditStoryFormComponent implements OnInit, OnDestroy {
  @Input() id?: string;
  @Input() img?: string;
  @Output() complete = new EventEmitter<void>();
  @Output() change = new EventEmitter<void>();

  private subscriptions: Subscription = new Subscription();
  private messageId: string | null = null;

  story: ICreateStory = {
    title: 'Triệu Hồi Đến Thế Giới Fantasy',
    genreIds: [],
    authorIds: [],
  };

  status: string[] = ['Updating', 'Halt', 'Full'];
  selectedAuthors?: IAuthor[];
  selectedGenres?: IGenre[] = [];

  authorVisible = false;
  genreVisible = false;

  constructor(
    private storyService: StoryService,
    private message: NzMessageService,
  ) { }

  ngOnInit(): void {
    if (this.id) {
      this.getStoryDetails(this.id)
    }
  }

  getStoryDetails(id: string): void {
    this.storyService.getStoryById(id).subscribe(
      (response) => {
        this.story = response.data;
      },
      (error) => {
        console.error('Error fetching author details:', error);
      }
    );
  }

  receiveThumbnail(url: IResponseImage) {
    this.story.thumbnailUrl = url.data.url;
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.createMessageloading();
    this.getGenreIds(this.selectedGenres)
    this.getAuthorIds(this.selectedAuthors)

    if (this.id) {
      this.storyService.updateStory(this.id, this.story).subscribe(
        (response) => {
          this.createMessage('success')
          this.complete.emit();
        },
        (error) => {
          this.createMessage('error')
        }
      );
    }
  }

  getGenreIds(genre?: IGenre[]) {
    if (genre) {
      this.story.genreIds = genre.map(genre => genre.id || '');
    }
  }

  getAuthorIds(author?: IAuthor[]) {
    if (author) {
      this.story.authorIds = author.map(author => author.id || '');
    }
  }

  onFieldValueChange(field: keyof ICreateStory, value: string | number | Date | undefined): void {
    this.change.emit();
  }

  handleGenreVisible(value: boolean) {
    this.genreVisible = value;
  }

  handleAuthorVisible(value: boolean) {
    this.authorVisible = value;
  }

  onGenresSelected(genres: IGenre[]) {
    this.selectedGenres = genres;
  }

  onauthorsSelected(author: IAuthor[]) {
    this.selectedAuthors = author;
  }

  createMessageloading(): void {
    this.messageId = this.message.loading('Action in progress..', { nzDuration: 0 }).messageId;
  }

  createMessage(type: string): void {
    if (this.messageId) {
      this.message.remove(this.messageId);
    }
    this.message.create(type, `This is a message of ${type}`);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
