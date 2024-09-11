import { Injectable } from '@angular/core';
import { ApiCallerService } from '@app/core/services/api-caller.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IAuthor, IAuthors } from '@app/shared/components/open-form/types/author.type';
import { IQueryParams } from '@app/modules/admin/types/query-params.type';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private apiGetAllUrl = environment.adminEndpoint.author.getAll;

  constructor(private apiCallerService: ApiCallerService) { }

  getAllAuthors(params?: IQueryParams): Observable<IAuthors> {
    return this.apiCallerService.get<IQueryParams, IAuthors>(this.apiGetAllUrl ,params);
  }
}
