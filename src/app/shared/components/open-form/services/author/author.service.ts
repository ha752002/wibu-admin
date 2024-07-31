import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IAuthor } from '../../types/author.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private apiUrl = environment.apiUrl + environment.adminEndpoint.genre.push;

  constructor(private http: HttpClient) { }

  createAuthor(author: IAuthor): Observable<IAuthor> {
    return this.http.post<IAuthor>(this.apiUrl, author);
  }
}
