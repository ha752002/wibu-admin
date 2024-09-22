import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { OpenModalComponent } from '../open-modal/open-modal.component';
import { IGenre } from '../open-form/types/genre.type';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { GenreService } from '../../services/genre/genre.service';
import { InputFieldComponent } from '../input-field/input-field.component';
import { IconComponent } from '../icon/icon.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { OpenFormComponent } from '../open-form/open-form.component';
import { IQueryParams } from '@app/modules/admin/types/query-params.type';

@Component({
  selector: 'app-genre-selector',
  standalone: true,
  imports: [
    CommonModule,
    OpenModalComponent,
    InputFieldComponent,
    IconComponent,
    NzButtonModule
  ],
  templateUrl: './genre-selector.component.html',
  styleUrl: './genre-selector.component.scss'
})
export class GenreSelectorComponent implements OnInit, OnDestroy{
  @Output() outGenresSelected = new EventEmitter<IGenre[]>();
  @Output() outGenresSelectedId = new EventEmitter<string[]>();
  @Input() inGenresSelected?: IGenre[] = [];
  @Input() inGenresSelectedId: string[] = [];
  private subscriptions: Subscription = new Subscription();
  genres: IGenre[] = []

  configurationParams: IQueryParams = {
    pageNumber: 1,
    pageSize: 99999,
    filterRules: '',
  }

  selectedGenres: IGenre[] = [];
  selectedGenresId: string[] = [];

  constructor(private genreService: GenreService) { }


ngOnInit(): void {
  this.getAllGenres();
  if(this.inGenresSelected){
    this.selectedGenres = this.inGenresSelected
  }
}

getAllGenres(): void {
  this.subscriptions.add(
    this.genreService.getAllGenres(this.configurationParams).pipe(
      finalize(() => {
      })
    ).subscribe(
      response => {
        this.genres = response.data;
      },
      error => {
        console.error('Error loading genres', error);
      }
    )
  );
}

  toggleGenre(genre: IGenre) {
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
    this.outGenresSelected.emit(this.selectedGenres);
    this.outGenresSelectedId.emit(this.selectedGenresId);
  }

  isSelected(genre: IGenre): boolean {
    return this.selectedGenres.some(g => g.id === genre.id);

  }

  clean(){
    this.selectedGenres = []
    this.outGenresSelected.emit(this.selectedGenres);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
