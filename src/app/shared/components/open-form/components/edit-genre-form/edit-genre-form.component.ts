import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputFieldComponent } from '@app/shared/components/input-field/input-field.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { IGenre } from '../../types/genre.type';
import { GenreService } from '../../services/genre/genre.service';
import { Subscription } from 'rxjs';

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
export class EditGenreFormComponent implements OnInit , OnDestroy{
  @Input() id?: string;
  @Output() complete = new EventEmitter<void>();
  private subscriptions: Subscription = new Subscription();

  genre: IGenre = {
    title: '',
    description: '',
    // AgeWarning: false,
  };

  constructor(private genreService: GenreService) { }

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
    if (this.id) {
      this.genreService.updateGenre(this.id, this.genre).subscribe(
        (response) => {
          this.complete.emit();     
        },
        (error) => {
          console.error('Error updating genre:', error);
        }
      );
    }
  }

  onFieldValueChange(field: keyof IGenre, value: string | number | Date | undefined): void {
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
