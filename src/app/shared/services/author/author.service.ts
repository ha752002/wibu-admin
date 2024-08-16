import { Injectable } from '@angular/core';
import { ApiCallerService } from '@app/core/services/api-caller.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IAuthor } from '@app/shared/components/open-form/types/author.type';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private apiGetAllUrl = environment.adminEndpoint.author.getAll;

  constructor(private apiCallerService: ApiCallerService) { }

  getAllAuthors(): Observable<IAuthor[]> {
    return this.apiCallerService.get<null, IAuthor[]>(this.apiGetAllUrl);
  }
}
