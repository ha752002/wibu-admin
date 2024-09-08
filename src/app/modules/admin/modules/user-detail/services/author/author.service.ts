import { Injectable } from '@angular/core';
import { ApiCallerService } from '@app/core/services/api-caller.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IResponseAuthor } from '../../types/author.type';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private apiUrl = environment.adminEndpoint.author;

  constructor(private apiCallerService: ApiCallerService) { }

  getAuthorById(id: string): Observable<IResponseAuthor> {
    return this.apiCallerService.get<string , IResponseAuthor>(this.apiUrl.getById , id);
  }
}
