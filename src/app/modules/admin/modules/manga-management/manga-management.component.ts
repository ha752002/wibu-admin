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
import { Imeta } from '../story/type/story.type';
import { IStoryFilter, IStoryParams, IValueFilter } from './type/manga-Filter.type';
import { EFilterOperation } from '@app/core/enums/operation.enums';

@Component({
  selector: 'app-manga-management',
  templateUrl: './manga-management.component.html',
  styleUrl: './manga-management.component.scss'
})
export class MangaManagementComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription = new Subscription();
  private eventSubscription!: Subscription;

  filters: IStoryFilter[] = [];
  itemFilter: IStoryFilter = {
    value: '',
    operation: EFilterOperation.EQUAL,
    target: ''
  };

  valuefilters: IValueFilter = {}

  ConfigurationParams: IStoryParams = {
    pageNumber: 1,
    pageSize: 8,
    filterRules: '',
    sortType: '',
    sortBy: ''
  }

  meta?: Imeta;
  genreNames: string[] = [];
  teamList: string[] = ['All', 'Team A', 'Team B', 'Team C'];
  viewType: viewType = "grid"
  multiGenreMode: boolean = false;
  previewVisible = false;
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
    });
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
        this.valuefilters.genre = genreParam;
        this.onFieldValueChange('genre', genreParam)
      }
    });
  }

  getAllGenres(): void {
    this.subscriptions.add(
      this.genreService.getAllGenres().pipe(
        finalize(() => {
          this.getParams();
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
          this.meta = response.meta
        },
        error => {
          console.error('Error loading storys', error);
        }
      )
    );
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
    console.log(this.filters);
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

  changeViewType(view: viewType) {
    if (view === 'table') {
      this.viewType = 'grid'
    } else {
      this.viewType = 'table'
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