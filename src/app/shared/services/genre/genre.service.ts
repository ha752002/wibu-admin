import { Injectable } from '@angular/core';
import { ApiCallerService } from '@app/core/services/api-caller.service';
import { IGenre, IGenres } from '@app/shared/components/open-form/types/genre.type';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private apiGetAllUrl = environment.adminEndpoint.genre.getAll;

  constructor(private apiCallerService: ApiCallerService) { }

  getAllGenres(): Observable<IGenres> {
    return this.apiCallerService.get<null, IGenres>(this.apiGetAllUrl);
  }
}
