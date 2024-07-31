import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IGenre } from '../../types/genre.type';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private apiUrl = environment.apiUrl + environment.adminEndpoint.genre.push;

  constructor(private http: HttpClient) { }

  createGenre(genre: IGenre): Observable<IGenre> {
    return this.http.post<IGenre>(this.apiUrl, genre);
  }
}
