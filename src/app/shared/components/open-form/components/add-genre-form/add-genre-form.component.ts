import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputFieldComponent } from '@app/shared/components/input-field/input-field.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { IGenre } from '../../types/genre.type';
import { GenreService } from '../../services/genre/genre.service';
import { Subscription } from 'rxjs';

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
export class AddGenreFormComponent implements OnDestroy{
  @Output() complete = new EventEmitter<void>();

  genre: IGenre = {
    title: '',
    description: '',
    // AgeWarning: false,
  };
  private subscriptions: Subscription = new Subscription();

  constructor(private genreService: GenreService) { }


  onSubmit(event: Event): void {
    event.preventDefault();
    this.genreService.createGenre(this.genre).subscribe(
      response => {
        this.complete.emit();        
      },
      error => {
        console.error('Error creating genre', error);
      }
    );
  }

  onFieldValueChange(field: keyof IGenre, value: string | number | Date | undefined): void {
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
