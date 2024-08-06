import { Injectable } from '@angular/core';
import { ApiCallerService } from '@app/core/services/api-caller.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IGenre } from '../../open-form/types/genre.type';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private apiGetAllUrl = environment.adminEndpoint.genre.getAll;

  constructor(private apiCallerService: ApiCallerService) { }

  getAllGenres(): Observable<IGenre[]> {
    return this.apiCallerService.get<null, IGenre[]>(this.apiGetAllUrl);
  }
}
