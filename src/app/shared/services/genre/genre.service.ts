import { Injectable } from '@angular/core';
import { ApiCallerService } from '@app/core/services/api-caller.service';
import { IQueryParams } from '@app/modules/admin/types/query-params.type';
import { IGenre, IGenres } from '@app/shared/components/open-form/types/genre.type';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private apiGetAllUrl = environment.adminEndpoint.genre.getAll;

  constructor(private apiCallerService: ApiCallerService) { }

  getAllGenres(params?: IQueryParams): Observable<IGenres> {
    return this.apiCallerService.get<IQueryParams, IGenres>(this.apiGetAllUrl,params);
  }
}
