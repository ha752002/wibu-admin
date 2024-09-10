import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '@app/modules/admin/services/event/event.service';
import { IGenre } from '@app/shared/components/open-form/types/genre.type';
import { GenreService } from '@app/shared/services/genre/genre.service';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrl: './genre-list.component.scss'
})
export class GenreListComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription = new Subscription();
  private eventSubscription!: Subscription;

  genres: IGenre[] = [];
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
  selectedGenresId: string[] = [];
  selectMode: boolean = false;
  searchQuery: string = '';

  constructor(
    private router: Router,
    private eventService: EventService,
    private genreService: GenreService
  ) { }

  ngOnInit(): void {
    this.eventSubscription = this.eventService.event$.subscribe(() => {
      this.getAllGenres();
    });
    this.getAllGenres()
  }

  getAllGenres(): void {
    this.subscriptions.add(
      this.genreService.getAllGenres().pipe(
        finalize(() => {
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
    if (this.selectMode) {
      const index = this.selectedGenres.findIndex(g => g.id === genre.id);
      if (index === -1) {
        this.selectedGenres.push(genre);
        if (genre.id) {
          this.selectedGenresId.push(genre.id);
        }
      } else {
        this.selectedGenres.splice(index, 1);
        this.selectedGenresId.splice(index, 1);
      }
    }
  }

  isSelected(genre: IGenre): boolean {
    return this.selectedGenres.some(g => g.id === genre.id);
  }

  onFieldValueChange(field: keyof string, value: string | number | Date | undefined): void {
  }

  blockFormClosing(event: MouseEvent) {
    event.stopPropagation();
  }

  ChangeSelectionMode() {
    this.selectMode = !this.selectMode
    this.selectedGenres = []
  }

  navigateToMangaWithId(genreId: string) {
    if (!this.selectMode) { this.router.navigate(['admin/manga/', genreId]); }

  }

  navigateToStory() {
    this.router.navigate(['admin/manga/'], { queryParams: { genreId: JSON.stringify(this.selectedGenresId) } });
  }

  identify(index: number, item: any): any {
    return item.id;
  }

  ngOnDestroy() {
    if (this.eventSubscription) {
      this.eventSubscription.unsubscribe();
    }
  }
}
