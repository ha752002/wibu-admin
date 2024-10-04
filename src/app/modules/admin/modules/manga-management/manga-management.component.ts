import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
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
import { EViewTypeOptions } from '@app/core/enums/options.enums';
import { ConfigurationService } from '../../services/configuration-params/configuration.service';

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

  genreNames: string[] = [];
  genreIds: string[] = [];
  teamList: string[] = ['full', 'continued', 'drop'];

  configurationParams: IQueryParams = {}
  viewType: EViewTypeOptions = EViewTypeOptions.Grid;
  rowSize: number = 3;
  meta?: Imeta;

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
    private storyService: StoryService,
    private configService: ConfigurationService,
  ) { }

  ngOnInit(): void {
    this.eventSubscription = this.eventService.event$.subscribe(() => this.initializeData());
    this.getAllGenres();
    this.initializeData();
  }

  private initializeData(): void {
    this.loadConfigParams();
    this.getAllStorys()
  }

  loadConfigParams(): void {
    this.viewType = this.configService.getViewType();
    this.rowSize = this.configService.getRowSize();
    this.itemFilter.operation = this.configService.getOperation();    
    this.configurationParams = this.configService.getParamsConfiguration(this.filters);
  }

  getAllGenres(): void {
    this.subscriptions.add(
      this.genreService.getAllGenres().pipe(
        finalize(() => {
        })
      ).subscribe(
        response => {
          this.genres = response.data;
          this.genreNames = this.genres.map(g => g.title);
          this.genreIds = this.genres.map(g => g.id);
          this.getParamsGenreId();
        },
        error => {
          console.error('Error loading genres', error);
        }
      )
    );
  }

  getAllStorys(): void {
    this.storys = [];
    this.subscriptions.add(
      this.storyService.getAllStorys(this.configurationParams).pipe(
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
    
    if (this.selectedGenres.length > 0) {
      this.multiGenreMode = true
      this.selectedGenres.forEach(genre => this.getStorysByGenres(genre));
    } else {
      this.multiGenreMode = false
    }
    this.onfiltersChange()
  }

  onfiltersChange(): void {
    const encodedData = encodeURIComponent(JSON.stringify(this.filters))
    this.configurationParams.filterRules = encodedData
    this.getAllStorys()
  }

  onPageChange(page: number): void {
    this.configurationParams.pageNumber = page;
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