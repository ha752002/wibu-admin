import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IGenre, IResponseGenre, ISimpleGenre } from '../../types/genre.type';
import { ApiCallerService } from '@app/core/services/api-caller.service';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private apiUrl = environment.adminEndpoint.genre;

  constructor(private apiCallerService: ApiCallerService) { }

  getGenreById(id: string): Observable<IResponseGenre> {
    return this.apiCallerService.get<string , IResponseGenre>(this.apiUrl.getById , id);
  }

  createGenre(genre: ISimpleGenre): Observable<IResponseGenre> {
    return this.apiCallerService.post<ISimpleGenre, IResponseGenre>(this.apiUrl.push, genre);
  }

  updateGenre(id: string, genre: ISimpleGenre): Observable<IResponseGenre> {    
    return this.apiCallerService.put<ISimpleGenre, IResponseGenre>(`${this.apiUrl.update}/${id}`, genre);
  }

  deleteGenre(id: string): Observable<void> {
    return this.apiCallerService.patch<void>(this.apiUrl.delete.replace('{id}', id.toString()), {});
  }
}
