import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { viewType } from '@app/shared/components/story-list/story-list.component';
import { ActivatedRoute } from '@angular/router';
import { IGenre } from '@app/shared/components/open-form/types/genre.type';
import { ImangaFilter } from './type/manga-Filter.type';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { GenreService } from '@app/shared/services/genre/genre.service';
import { StoryService } from '@app/shared/services/story/story.service';
import { IStoryInformation } from './type/manga.type';

@Component({
  selector: 'app-manga-management',
  templateUrl: './manga-management.component.html',
  styleUrl: './manga-management.component.scss'
})
export class MangaManagementComponent implements OnInit {
  private subscriptions: Subscription = new Subscription();

  filter: ImangaFilter = {
    search: '',
    genre: '',
    chapterNumber: '',
  }

  genreNames: string[] = [];
  teamList: string[] = ['All', 'Team A', 'Team B', 'Team C'];
  viewType: viewType = "grid"
  multiGenreMode: boolean = false;
  previewVisible = false;
  storys: IStoryInformation[] = [];

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

  constructor(
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
     private genreService: GenreService,
      private storyService: StoryService
    ){}


  ngOnInit(): void {
    this.getAllGenres();
  }

  getParams() {
    this.route.queryParams.subscribe(params => {
      const genreParam = params['genreId'];
      if (genreParam) {
        const parsedGenres = JSON.parse(genreParam);
        this.multiGenreMode = true;
        this.selectedGenres = this.genres.filter(genre => genre.id !== undefined && parsedGenres.includes(genre.id));
      } else {
        this.getGenreById()
      }
    });
  }

  getGenreById() {
    this.route.params.subscribe(params => {
      const genreParam = params['genreId'];
      if (genreParam) {
        this.filter.genre = genreParam;
      }
    });
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
          this.genreNames = this.genres.map(g => g.title);
          this.getParams();
          this.getAllStorys();
        },
        error => {
          console.error('Error loading genres', error);
          this.genres = this.dataGenres
          this.genreNames = this.genres.map(g => g.title);
          this.getParams();
        }
      )
    );
  }

  getAllStorys(): void {
    this.storys = []
    this.subscriptions.add(
      this.storyService.getAllStorys().pipe(
        finalize(() => {
          console.log('storys loaded');
        })
      ).subscribe(
        response => {
          this.storys = response.data;
        },
        error => {
          console.error('Error loading storys', error);
        }
      )
    );
  }

  onFieldValueChange(field: keyof ImangaFilter, value: string | number | Date | undefined): void {
  }

  changeViewType(view: viewType) {
    if (view === 'table') {
      this.viewType = 'grid'
    } else {
      this.viewType = 'table'
    }
  }

  changeMultiGenreMode(Mode: boolean) {
    if (this.multiGenreMode) {

    }
  }

  handleVisible(value: boolean) {
    this.previewVisible = value;
  }

  onGenresSelected(genres: IGenre[]) {
    this.selectedGenres = genres;
    if (this.selectedGenres.length == 0) {
      this.multiGenreMode = false
    } else {
      this.multiGenreMode = true
    }
  }
}
