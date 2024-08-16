import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IGenre } from '../../types/genre.type';
import { ApiCallerService } from '@app/core/services/api-caller.service';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private apiUrl = environment.adminEndpoint.genre;

  constructor(private apiCallerService: ApiCallerService) { }

  createGenre(genre: IGenre): Observable<IGenre> {
    return this.apiCallerService.post<IGenre, IGenre>(this.apiUrl.push, genre);
  }

  updateGenre(id: number, genre: IGenre): Observable<IGenre> {
    return this.apiCallerService.patch(`${this.apiUrl.update}/${id}`, genre);
  }

  deleteGenre(id: number): Observable<void> {
    return this.apiCallerService.patch<void>(this.apiUrl.delete.replace('{id}', id.toString()), {});
  }
}
