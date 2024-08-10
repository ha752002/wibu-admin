import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { OpenModalComponent } from '../open-modal/open-modal.component';
import { IGenre } from '../open-form/types/genre.type';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { GenreService } from '../services/genre/genre.service';

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
    { genre: 'Fantasy', AgeWarning: false, describe: 'A fantasy story' },
    { genre: 'Adventure', AgeWarning: false, describe: 'An adventurous journey' },
    { genre: 'Mystery', AgeWarning: false, describe: 'A mysterious tale' },
    { genre: 'Mythology', AgeWarning: false, describe: 'Mythological stories' },
    { genre: 'Sci-Fi', AgeWarning: false, describe: 'Science fiction stories' },
    { genre: 'Horror', AgeWarning: true, describe: 'Scary and horror stories' },
    { genre: 'Romance', AgeWarning: false, describe: 'Love and romance stories' },
    { genre: 'Thriller', AgeWarning: true, describe: 'Thrilling and suspenseful tales' },
    { genre: 'Comedy', AgeWarning: false, describe: 'Humorous and funny stories' },
    { genre: 'Drama', AgeWarning: false, describe: 'Serious and dramatic stories' }
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
        this.genres = response;
        console.log('Genres:', this.genres);
      },
      error => {
        console.error('Error loading genres', error);
        this.genres = this.dataGenres
      }
    )
  );
}

  toggleGenre(genre: IGenre) {
    const index = this.selectedGenres.findIndex(g => g.genre === genre.genre);
    if (index === -1) {
      this.selectedGenres.push(genre);
    } else {
      this.selectedGenres.splice(index, 1);
    }
    this.outGenresSelected.emit(this.selectedGenres);
  }

  isSelected(genre: IGenre): boolean {
    console.log(this.selectedGenres.some(g => g.genre === genre.genre));
    
    return this.selectedGenres.some(g => g.genre === genre.genre);

  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
