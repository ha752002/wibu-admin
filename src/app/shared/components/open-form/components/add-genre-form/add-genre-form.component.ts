import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputFieldComponent } from '@app/shared/components/input-field/input-field.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { IGenre } from '../../types/genre.type';
import { GenreService } from '../../services/genre/genre.service';
import { Subscription } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-add-genre-form',
  standalone: true,
  imports: [
    CommonModule,
    InputFieldComponent,
    NzButtonModule,
    NzCheckboxModule,
    FormsModule,
  ],
  templateUrl: './add-genre-form.component.html',
  styleUrl: './add-genre-form.component.scss'
})
export class AddGenreFormComponent implements OnDestroy {
  @Output() complete = new EventEmitter<void>();
  private messageId: string | null = null;

  genre: IGenre = {
    title: '',
    description: '',
    // AgeWarning: false,
  };
  private subscriptions: Subscription = new Subscription();

  constructor(
    private genreService: GenreService,
    private message: NzMessageService,
  ) { }


  onSubmit(event: Event): void {
    event.preventDefault();
    this.createMessageloading();

    this.genreService.createGenre(this.genre).subscribe(
      response => {

        this.createMessage('success')
        this.complete.emit();
      },
      error => {

        this.createMessage('error')
      }
    );
  }

  onFieldValueChange(field: keyof IGenre, value: string | number | Date | undefined): void {
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
