import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IAuthor, IUpdateAndCreateAuthor } from '../../types/author.type';
import { Observable } from 'rxjs';
import { ApiCallerService } from '@app/core/services/api-caller.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private apiUrl = environment.adminEndpoint.author;

  constructor(private apiCallerService: ApiCallerService) { }

  createAuthor(author: IUpdateAndCreateAuthor): Observable<IUpdateAndCreateAuthor> {
    return this.apiCallerService.post<IUpdateAndCreateAuthor, IUpdateAndCreateAuthor>(this.apiUrl.push, author);
  }

  updateAuthor(id: string, author: IUpdateAndCreateAuthor): Observable<IAuthor> {
    return this.apiCallerService.put(`${this.apiUrl.update}/${id}`, author);
  }

  deleteAuthor(id: string): Observable<void> {
    return this.apiCallerService.patch<void>(this.apiUrl.delete.replace('{id}', id.toString()), {});
  }
}
