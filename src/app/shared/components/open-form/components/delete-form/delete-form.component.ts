import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { UserService } from '../../services/user/user.service';
import { StoryService } from '../../services/story/story.service';
import { ChapterService } from '../../services/chapter/chapter.service';
import { AuthorService } from '../../services/author/author.service';
import { GenreService } from '../../services/genre/genre.service';
import { Subscription } from 'rxjs';

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
export class DeleteFormComponent implements OnDestroy{
  @Input() id?: string;
  @Input() delete: 'user' | 'story' | 'chapter' | 'author' | 'genre' = 'user';
  @Output() complete = new EventEmitter<void>();
  private subscriptions: Subscription = new Subscription();

  constructor(
    private userService: UserService,
    private storyService: StoryService,
    private chapterService: ChapterService,
    private authorService: AuthorService,
    private genreService: GenreService
  ) {}

  onDelete(): void {
    if (this.id) {
      switch (this.delete) {
        case 'user':
          this.userService.deleteUser(this.id).subscribe(
            () => {
              console.log(`Deleted user with id: ${this.id}`);
              this.complete.emit();
            },
            error => console.error(`Error deleting user: ${error}`)
          );
          break;
        case 'story':
          this.storyService.deleteStory(this.id).subscribe(
            () => {
              console.log(`Deleted story with id: ${this.id}`);
              this.complete.emit();
            },
            error => console.error(`Error deleting story: ${error}`)
          );
          break;
        case 'chapter':
          this.chapterService.deleteChapter(this.id).subscribe(
            () => {
              console.log(`Deleted chapter with id: ${this.id}`);
              this.complete.emit();
            },
            error => console.error(`Error deleting chapter: ${error}`)
          );
          break;
        case 'author':
          this.authorService.deleteAuthor(this.id).subscribe(
            () => {
              console.log(`Deleted author with id: ${this.id}`);
              this.complete.emit();
            },
            error => console.error(`Error deleting author: ${error}`)
          );
          break;
        case 'genre':
          this.genreService.deleteGenre(this.id).subscribe(
            () => {
              console.log(`Deleted genre with id: ${this.id}`);
              this.complete.emit();
            },
            error => console.error(`Error deleting genre: ${error}`)
          );
          break;
      }
    }
  }

  done(){
    this.complete.emit();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
