import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputFieldComponent } from '@app/shared/components/input-field/input-field.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { IGenre } from '../../types/genre.type';
import { GenreService } from '../../services/genre/genre.service';

@Component({
  selector: 'app-edit-genre-form',
  standalone: true,
  imports: [
    CommonModule,
    InputFieldComponent,
    NzButtonModule,
    NzCheckboxModule, 
    FormsModule ,
  ],
  templateUrl: './edit-genre-form.component.html',
  styleUrl: './edit-genre-form.component.scss'
})
export class EditGenreFormComponent implements OnInit{
  @Input() id?: number;

  genre: IGenre = {
    genre: '',
    describe: '',
    AgeWarning: false,
  };

  constructor(private genreService: GenreService) { }

  ngOnInit(): void {
    this.genre.id = this.id
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.id) {
      this.genreService.updateGenre(this.id, this.genre).subscribe(
        (response) => {
        },
        (error) => {
          console.error('Error updating genre:', error);
        }
      );
    }
  }

  onFieldValueChange(field: keyof IGenre, value: string | number | Date | undefined): void {
  }
}
