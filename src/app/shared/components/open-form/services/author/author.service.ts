import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IAuthor } from '../../types/author.type';
import { Observable } from 'rxjs';
import { ApiCallerService } from '@app/core/services/api-caller.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private apiUrl = environment.adminEndpoint.author.push;

  constructor(private apiCallerService: ApiCallerService) { }

  createAuthor(author: IAuthor): Observable<IAuthor> {
    return this.apiCallerService.post<IAuthor, IAuthor>(this.apiUrl, author);
  }
}
