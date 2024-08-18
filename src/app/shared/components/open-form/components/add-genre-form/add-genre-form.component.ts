import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputFieldComponent } from '@app/shared/components/input-field/input-field.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { IGenre } from '../../types/genre.type';
import { GenreService } from '../../services/genre/genre.service';

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
export class AddGenreFormComponent {
  genre: IGenre = {
    genre: '',
    describe: '',
    AgeWarning: false,
  };

  constructor(private genreService: GenreService) { }


  onSubmit(event: Event): void {
    event.preventDefault();
    this.genreService.createGenre(this.genre).subscribe(
      response => {
      },
      error => {
        console.error('Error creating genre', error);
      }
    );
  }

  onFieldValueChange(field: keyof IGenre, value: string | number | Date | undefined): void {
  }
}
