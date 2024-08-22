import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IGenre, IResponseGenre } from '../../types/genre.type';
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

  createGenre(genre: IGenre): Observable<IGenre> {
    return this.apiCallerService.post<IGenre, IGenre>(this.apiUrl.push, genre);
  }

  updateGenre(id: string, genre: IGenre): Observable<IGenre> {
    console.log(this.apiUrl.update+'/'+id);
    
    return this.apiCallerService.put(`${this.apiUrl.update}/${id}`, genre);
  }

  deleteGenre(id: string): Observable<void> {
    return this.apiCallerService.patch<void>(this.apiUrl.delete.replace('{id}', id.toString()), {});
  }
}
