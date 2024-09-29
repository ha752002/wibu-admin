import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
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
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IPage, IResponseImage } from '@app/shared/types/image.types';
import { NzMessageService } from 'ng-zorro-antd/message';
import { EMessageType } from '@app/core/enums/message.enums';
import { MessageService } from '../../services/message/message.service';



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
    FormsModule
  ],
  selector: 'app-add-story-form',
  templateUrl: './add-story-form.component.html',
  styleUrl: './add-story-form.component.scss'
})
export class AddStoryFormComponent implements OnInit, OnDestroy {
  @Input() genre?: IGenre[] = [];
  @Output() complete = new EventEmitter<void>();
  @Output() change = new EventEmitter<void>();

  story: ICreateStory = {
    thumbnailUrl: 'https://i.pinimg.com/564x/db/2e/9b/db2e9b90318548e2cde3edd6b908c6f0.jpg',
    genreIds: [],
    authorIds: [],
  };
  status: string[] = ['Updating', 'Halt', 'Full'];
  selectedAuthors?: IAuthor[];
  selectedGenres?: IGenre[] = [];
  authorVisible = false;
  genreVisible = false;
  private subscriptions: Subscription = new Subscription();
  private messageId: string | null = null;

  constructor(
    private storyService: StoryService,
    private message: MessageService,
  ) { }

  ngOnInit(): void {
    this.selectedGenres = this.genre
  }

  receiveThumbnail(url: IResponseImage) {
    this.story.thumbnailUrl = url.data.url;
  }

  onSubmit(event: Event): void {
    this.message.createMessageloading();
    this.getGenreIds(this.selectedGenres)
    this.getAuthorIds(this.selectedAuthors)
    event.preventDefault();
    this.storyService.createStory(this.story).subscribe(
      (response) => {
        this.message.createMessage(EMessageType.SUCCESS ,response.message )
        this.complete.emit();
      },
      (error) => {
        this.message.createMessage(EMessageType.ERROR , error)
      }
    );
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

  onAuthorsSelected(author: IAuthor[]) {
    this.selectedAuthors = author;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
