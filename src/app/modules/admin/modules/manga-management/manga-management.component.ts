import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { viewType } from '@app/shared/components/story-list/story-list.component';
import { ActivatedRoute } from '@angular/router';
import { IGenre } from '@app/shared/components/open-form/types/genre.type';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { GenreService } from '@app/shared/services/genre/genre.service';
import { StoryService } from '@app/shared/services/story/story.service';
import { IStoryInformation } from './type/manga.type';
import { EventService } from '../../services/event/event.service';
import { IValueFilter } from './type/manga-Filter.type';
import { EFilterOperation } from '@app/core/enums/operation.enums';
import { IFilter, Imeta } from '../../types/meta.type';
import { IQueryParams } from '../../types/query-params.type';

@Component({
  selector: 'app-manga-management',
  templateUrl: './manga-management.component.html',
  styleUrl: './manga-management.component.scss'
})
export class MangaManagementComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription = new Subscription();
  private eventSubscription!: Subscription;

  filters: IFilter[] = [];
  itemFilter: IFilter = {
    value: '',
    operation: EFilterOperation.MATCH,
    target: ''
  };

  valuefilters: IValueFilter = {}

  ConfigurationParams: IQueryParams = {
    pageNumber: 1,
    pageSize: 16,
    filterRules: '',
    sortType: '',
    sortBy: ''
  }

  meta?: Imeta;
  genreNames: string[] = [];
  teamList: string[] = ['All', 'Team A', 'Team B', 'Team C'];
  viewType: viewType = 'grid';
  rowSize: number = 3;
  multiGenreMode: boolean = false;
  genreSelector = false;
  installation = false;
  storys: IStoryInformation[] = [];

  genres: IGenre[] = [];

  selectedGenres: IGenre[] = [];

  constructor(
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private eventService: EventService,
    private genreService: GenreService,
    private storyService: StoryService
  ) { }

  ngOnInit(): void {
    this.eventSubscription = this.eventService.event$.subscribe(() => {
      this.getAllGenres();
      this.loadConfigParams();
    });
    this.getAllGenres();    
    this.loadConfigParams();

  }

  getAllGenres(): void {
    this.subscriptions.add(
      this.genreService.getAllGenres().pipe(
        finalize(() => {
          this.getParamsGenreId();
        })
      ).subscribe(
        response => {
          this.genres = response.data;
          this.genreNames = this.genres.map(g => g.title);
          this.getAllStorys();
        },
        error => {
          console.error('Error loading genres', error);
          this.genreNames = this.genres.map(g => g.title);
        }
      )
    );
  }

  getAllStorys(): void {
    this.storys = []

    this.subscriptions.add(
      this.storyService.getAllStorys(this.ConfigurationParams).pipe(
        finalize(() => {
        })
      ).subscribe(
        response => {
          this.storys = response.data;
          this.meta = response.meta;

        },
        error => {
          console.error('Error loading storys', error);
        }
      )
    );
  }

  getParamsGenreId() {
    this.route.queryParams.subscribe(params => {
      const genreParam = params['genreId'];
      if (genreParam) {
        const parsedGenres = JSON.parse(genreParam);
        console.log(parsedGenres);
        this.multiGenreFilter(
          this.genres.filter(genre => genre.id !== undefined && parsedGenres.includes(genre.id))
        )
      } else {
        this.getGenreById()
      }
    });
  }

  getGenreById() {
    this.route.params.subscribe(params => {
      const genreParam = params['genreId'];
      if (genreParam) {
        this.valuefilters.genre = genreParam;
        this.onFieldValueChange('genre', genreParam)
      }
    });
  }

  getStorysByGenres(genre: IGenre) {
    this.itemFilter = {
      ...this.itemFilter,
      target: 'genre',
      value: genre.id,
    };
    const index = this.filters.findIndex(filter => filter.target === 'genre' && filter.value === genre.id);
    if (index === -1) {
      this.filters.push({ ...this.itemFilter });
    } else {
      this.filters[index] = { ...this.itemFilter };
    }
  }

  loadConfigParams(): void {
    const storedConfig = localStorage.getItem('configParams');
    const storedViewType = localStorage.getItem('viewType');

    this.rowSize = Number(localStorage.getItem('rowSize')) || 3;
    if (storedViewType) {
      this.viewType = JSON.parse(storedViewType) as viewType;
    }
    
    if (storedConfig) {
      const configQueryParams: IQueryParams = JSON.parse(storedConfig);
      console.log(configQueryParams);
      
      this.applyConfig(configQueryParams);
    }
  }


 applyConfig(config: IQueryParams): void {
    this.ConfigurationParams.pageSize = config.pageSize;
    this.ConfigurationParams.sortType = config.sortType;
    this.ConfigurationParams.sortBy = config.sortBy;
  }
  onFieldValueChange(target: string, value: string | number | Date | undefined): void {
    const stringValue = value ? value.toString() : '';

    this.itemFilter = {
      ...this.itemFilter,
      target: target,
      value: stringValue,
    };
    const index = this.filters.findIndex(filter => filter.target === target);
    if (stringValue) {

      if (index === -1) {
        this.filters.push({ ...this.itemFilter });
      } else {
        this.filters[index] = { ...this.itemFilter };
      }
    } else if (index !== -1) {
      this.filters.splice(index, 1);
    }
    this.onfiltersChange()
  }

  handleGenreSelector(value: boolean) {
    this.genreSelector = value;
  }

  handleInstallation(value: boolean) {
    this.installation = value;
  }

  multiGenreFilter(genres: IGenre[]) {
    this.selectedGenres = genres;
    this.filters = []
    if (this.selectedGenres.length == 0) {
      this.multiGenreMode = false
    } else {
      this.multiGenreMode = true
      this.selectedGenres.forEach(genre => this.getStorysByGenres(genre));
      this.onfiltersChange()
    }
  }

  onfiltersChange(): void {
    const encodedData = encodeURIComponent(JSON.stringify(this.filters))
    this.ConfigurationParams.filterRules = encodedData
    this.getAllStorys()
  }

  onPageChange(page: number): void {
    this.ConfigurationParams.pageNumber = page;
    this.getAllStorys()
  }

  ngOnDestroy() {
    if (this.eventSubscription) {
      this.eventSubscription.unsubscribe();
    }
  }
}


// dataGenres: IGenre[] = [
//   { id: '1', title: 'Fantasy', description: 'A fantasy story' },
//   { id: '2', title: 'Adventure', description: 'An adventurous journey' },
//   { id: '3', title: 'Mystery', description: 'A mysterious tale' },
//   { id: '4', title: 'Mythology', description: 'Mythological stories' },
//   { id: '5', title: 'Sci-Fi', description: 'Science fiction stories' },
//   { id: '6', title: 'Horror', description: 'Scary and horror stories' },
//   { id: '7', title: 'Romance', description: 'Love and romance stories' },
//   { id: '8', title: 'Thriller', description: 'Thrilling and suspenseful tales' },
//   { id: '9', title: 'Comedy', description: 'Humorous and funny stories' },
//   { id: '10', title: 'Drama', description: 'Serious and dramatic stories' }
// ];