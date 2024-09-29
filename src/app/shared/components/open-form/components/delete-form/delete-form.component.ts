import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { UserService } from '../../services/user/user.service';
import { StoryService } from '../../services/story/story.service';
import { ChapterService } from '../../services/chapter/chapter.service';
import { AuthorService } from '../../services/author/author.service';
import { GenreService } from '../../services/genre/genre.service';
import { Subscription } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';
import { EMessageType } from '@app/core/enums/message.enums';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    NzButtonModule
  ],
  selector: 'app-delete-form',
  templateUrl: './delete-form.component.html',
  styleUrl: './delete-form.component.scss'
})
export class DeleteFormComponent implements OnDestroy {
  @Input() id?: string;
  @Input() delete: 'user' | 'story' | 'chapter' | 'author' | 'genre' = 'user';
  @Output() complete = new EventEmitter<void>();
  Message=  EMessageType;

  private subscriptions: Subscription = new Subscription();

  constructor(
    private messageService: NzMessageService,
    private userService: UserService,
    private storyService: StoryService,
    private chapterService: ChapterService,
    private authorService: AuthorService,
    private genreService: GenreService
  ) { }

  onDelete(): void {
    if (this.id) {
      switch (this.delete) {
        case 'user':
          this.userService.deleteUser(this.id).subscribe(
            () => {
              this.done(EMessageType.SUCCESS)
            },
            error => {
              this.done(EMessageType.ERROR)
            }
          );
          break;
        case 'story':
          this.storyService.deleteStory(this.id).subscribe(
            () => {
              this.done(EMessageType.SUCCESS)
            },
            error => {
              this.done(EMessageType.ERROR)
            }
          );
          break;
        case 'chapter':
          this.chapterService.deleteChapter(this.id).subscribe(
            () => {
              this.done(EMessageType.SUCCESS)
            },
            error => {
              this.done(EMessageType.ERROR)
            }
          );
          break;
        case 'author':
          this.authorService.deleteAuthor(this.id).subscribe(
            () => {
              this.done(EMessageType.SUCCESS)
            },
            error => {
              this.done(EMessageType.ERROR)
            }
          );
          break;
        case 'genre':
          this.genreService.deleteGenre(this.id).subscribe(
            () => {
              this.done(EMessageType.SUCCESS)
            },
            error => {
              this.done(EMessageType.ERROR)
            }
          );
          break;
      }
    }
  }

  done(message: EMessageType) {
    if (message != EMessageType.CANCEL) {
      this.createMessage(message)
    }
    this.complete.emit();
  }

  createMessage(type: string): void {
    this.messageService.create(type, `${this.delete} deleted ${type}`);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
