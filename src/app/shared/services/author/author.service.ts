import { Injectable } from '@angular/core';
import { ApiCallerService } from '@app/core/services/api-caller.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IAuthor, IAuthors } from '@app/shared/components/open-form/types/author.type';
import { IAuthorParams } from '@app/modules/admin/modules/library/types/author-filter.type';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private apiGetAllUrl = environment.adminEndpoint.author.getAll;

  constructor(private apiCallerService: ApiCallerService) { }

  getAllAuthors(params?: IAuthorParams): Observable<IAuthors> {
    return this.apiCallerService.get<IAuthorParams, IAuthors>(this.apiGetAllUrl ,params);
  }
}
