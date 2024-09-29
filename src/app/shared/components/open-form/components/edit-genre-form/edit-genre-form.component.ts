import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputFieldComponent } from '@app/shared/components/input-field/input-field.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { IGenre, ISimpleGenre } from '../../types/genre.type';
import { GenreService } from '../../services/genre/genre.service';
import { Subscription } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';
import { EMessageType } from '@app/core/enums/message.enums';
import { MessageService } from '../../services/message/message.service';

@Component({
  selector: 'app-edit-genre-form',
  standalone: true,
  imports: [
    CommonModule,
    InputFieldComponent,
    NzButtonModule,
    NzCheckboxModule,
    FormsModule,
  ],
  templateUrl: './edit-genre-form.component.html',
  styleUrl: './edit-genre-form.component.scss'
})
export class EditGenreFormComponent implements OnInit, OnDestroy {
  @Input() id?: string;
  @Output() complete = new EventEmitter<void>();
  @Output() change = new EventEmitter<void>();

  private subscriptions: Subscription = new Subscription();
  private messageId: string | null = null;

  genre: ISimpleGenre = {
    title: '',
    description: '',
    AgeWarning: false,
  };

  constructor(
    private genreService: GenreService,
    private message: MessageService,
  ) { }

  ngOnInit(): void {
    if (this.id) {
      this.getGenreDetails(this.id)
    }
  }

  getGenreDetails(id: string): void {
    this.genreService.getGenreById(id).subscribe(
      (response) => {
        this.genre = response.data;
      },
      (error) => {
        console.error('Error fetching author details:', error);
      }
    );
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.message.createMessageloading();

    if (this.id) {
      this.genreService.updateGenre(this.id, this.genre).subscribe(
        (response) => {
          this.message.createMessage(EMessageType.SUCCESS , response.message)
          this.complete.emit();
        },
        (error) => {
          this.message.createMessage(EMessageType.ERROR,error)
        }
      );
    }
  }

  onFieldValueChange(field: keyof IGenre, value: string | number | Date | undefined): void {
    this.change.emit();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
