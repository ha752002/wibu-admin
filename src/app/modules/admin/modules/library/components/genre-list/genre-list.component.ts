import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IGenre } from '@app/shared/components/open-form/types/genre.type';
import { GenreService } from '@app/shared/components/services/genre/genre.service';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrl: './genre-list.component.scss'
})
export class GenreListComponent implements OnInit {
  private subscriptions: Subscription = new Subscription();
  genres: IGenre[] = [];
  dataGenres: IGenre[] = [
    { id: 1, genre: 'Fantasy', AgeWarning: false, describe: 'A fantasy story' },
    { id: 2, genre: 'Adventure', AgeWarning: false, describe: 'An adventurous journey' },
    { id: 3, genre: 'Mystery', AgeWarning: false, describe: 'A mysterious tale' },
    { id: 4, genre: 'Mythology', AgeWarning: false, describe: 'Mythological stories' },
    { id: 5, genre: 'Sci-Fi', AgeWarning: false, describe: 'Science fiction stories' },
    { id: 6, genre: 'Horror', AgeWarning: true, describe: 'Scary and horror stories' },
    { id: 7, genre: 'Romance', AgeWarning: false, describe: 'Love and romance stories' },
    { id: 8, genre: 'Thriller', AgeWarning: true, describe: 'Thrilling and suspenseful tales' },
    { id: 9, genre: 'Comedy', AgeWarning: false, describe: 'Humorous and funny stories' },
    { id: 10, genre: 'Drama', AgeWarning: false, describe: 'Serious and dramatic stories' }
  ];

  selectedGenres: IGenre[] = [];
  selectMode: boolean = false;
  searchQuery: string = '';

  constructor(
    private router: Router,
    private genreService: GenreService
  ) { }

  ngOnInit(): void {
    this.getAllGenres()
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
    if (this.selectMode) {
      const index = this.selectedGenres.findIndex(g => g.genre === genre.genre);
      if (index === -1) {
        this.selectedGenres.push(genre);
      } else {
        this.selectedGenres.splice(index, 1);
      }
    }
  }

  isSelected(genre: IGenre): boolean {
    return this.selectedGenres.some(g => g.genre === genre.genre);
  }

  onFieldValueChange(field: keyof string, value: string | number | Date | undefined): void {
    console.log(this.searchQuery);
  }

  blockFormClosing(event: MouseEvent) {
    event.stopPropagation();
    console.log('Child clicked');
  }

  ChangeSelectionMode() {
    this.selectMode = !this.selectMode
    this.selectedGenres = []
  }

  navigateToMangaWithId(genreId: string) {
    this.router.navigate(['admin/manga/', genreId]);
  }

  navigateToStory() {
    const selectedGenresIds = this.selectedGenres.map(genre => genre.id);
    this.router.navigate(['admin/manga/'], { queryParams: { genreId: JSON.stringify(selectedGenresIds) } });
  }
}
