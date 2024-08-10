import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IGenre } from '../../types/genre.type';
import { ApiCallerService } from '@app/core/services/api-caller.service';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private apiUrl = environment.apiUrl + environment.adminEndpoint.genre.push;

  constructor(private apiCallerService: ApiCallerService) { }

  createGenre(genre: IGenre): Observable<IGenre> {
    return this.apiCallerService.post<IGenre, IGenre>(this.apiUrl, genre);

  }
}
