import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { OpenModalComponent } from '../open-modal/open-modal.component';
import { IGenre } from '../open-form/types/genre.type';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { GenreService } from '../../services/genre/genre.service';

@Component({
  selector: 'app-genre-selector',
  standalone: true,
  imports: [
    CommonModule,
    OpenModalComponent
  ],
  templateUrl: './genre-selector.component.html',
  styleUrl: './genre-selector.component.scss'
})
export class GenreSelectorComponent implements OnInit, OnDestroy{
  @Output() outGenresSelected = new EventEmitter<IGenre[]>();
  @Input() inGenresSelected: IGenre[] = [];
  private subscriptions: Subscription = new Subscription();
  genres: IGenre[] = []
  dataGenres: IGenre[] = [
    { id: '1', title: 'Fantasy', description: 'A fantasy story' },
    { id: '2', title: 'Adventure', description: 'An adventurous journey' },
    { id: '3', title: 'Mystery', description: 'A mysterious tale' },
    { id: '4', title: 'Mythology', description: 'Mythological stories' },
    { id: '5', title: 'Sci-Fi', description: 'Science fiction stories' },
    { id: '6', title: 'Horror', description: 'Scary and horror stories' },
    { id: '7', title: 'Romance', description: 'Love and romance stories' },
    { id: '8', title: 'Thriller', description: 'Thrilling and suspenseful tales' },
    { id: '9', title: 'Comedy', description: 'Humorous and funny stories' },
    { id: '10', title: 'Drama', description: 'Serious and dramatic stories' }
  ];
  selectedGenres: IGenre[] = [];

  constructor(private genreService: GenreService) { }


ngOnInit(): void {
  this.getAllGenres();
  if(this.inGenresSelected.length > 0){
    this.selectedGenres = this.inGenresSelected
  }
}

getAllGenres(): void {
  this.subscriptions.add(
    this.genreService.getAllGenres().pipe(
      finalize(() => {
        console.log('Genres loaded');
      })
    ).subscribe(
      response => {
        this.genres = response.data;
      },
      error => {
        console.error('Error loading genres', error);
        this.genres = this.dataGenres
      }
    )
  );
}

  toggleGenre(genre: IGenre) {
    const index = this.selectedGenres.findIndex(g => g.title === genre.title);
    if (index === -1) {
      this.selectedGenres.push(genre);
    } else {
      this.selectedGenres.splice(index, 1);
    }
    this.outGenresSelected.emit(this.selectedGenres);
  }

  isSelected(genre: IGenre): boolean {
    return this.selectedGenres.some(g => g.title === genre.title);

  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
