import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IAuthor, IResponseAuthor, ISimpleAuthor } from '../../types/author.type';
import { Observable } from 'rxjs';
import { ApiCallerService } from '@app/core/services/api-caller.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private apiUrl = environment.adminEndpoint.author;

  constructor(private apiCallerService: ApiCallerService) { }

  getAuthorById(id: string): Observable<IResponseAuthor> {
    return this.apiCallerService.get<string , IResponseAuthor>(this.apiUrl.getById , id);
  }

  createAuthor(author: ISimpleAuthor): Observable<ISimpleAuthor> {
    return this.apiCallerService.post<ISimpleAuthor, ISimpleAuthor>(this.apiUrl.push, author);
  }

  updateAuthor(id: string, author: ISimpleAuthor): Observable<IAuthor> {
    return this.apiCallerService.put(`${this.apiUrl.update}/${id}`, author);
  }

  deleteAuthor(id: string): Observable<void> {
    return this.apiCallerService.patch<void>(this.apiUrl.delete.replace('{id}', id.toString()), {});
  }
}
