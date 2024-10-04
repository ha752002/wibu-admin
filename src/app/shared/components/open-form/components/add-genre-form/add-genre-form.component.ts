import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputFieldComponent } from '@app/shared/components/input-field/input-field.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { IGenre, ISimpleGenre } from '../../types/genre.type';
import { GenreService } from '../../services/genre/genre.service';
import { Subscription } from 'rxjs';
import { EMessageType } from '@app/core/enums/message.enums';
import { MessageService } from '../../services/message/message.service';

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
  @Output() change = new EventEmitter<void>();

  private messageId: string | null = null;

  genre: ISimpleGenre = {
    title: '',
    description: '',
    AgeWarning: false,
  };
  private subscriptions: Subscription = new Subscription();

  constructor(
    private genreService: GenreService,
    private message: MessageService,
  ) { }


  onSubmit(event: Event): void {
    event.preventDefault();
    this.message.createMessageloading();

    this.genreService.createGenre(this.genre).subscribe(
      response => {
        this.message.createMessage(EMessageType.SUCCESS , response.message)
        this.complete.emit();
      },
      error => {
        this.message.createMessage(EMessageType.ERROR , error)
      }
    );
  }

  onFieldValueChange(field: keyof IGenre, value: string | number | Date | undefined): void {
    this.change.emit();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
