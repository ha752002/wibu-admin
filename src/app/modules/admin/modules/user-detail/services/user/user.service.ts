import { Injectable } from '@angular/core';
import { ApiCallerService } from '@app/core/services/api-caller.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IResponseUser } from '../../../user-management/type/user.types';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.authEndpoint;

  constructor(private apiCallerService: ApiCallerService) { }

  getUserById(id: string): Observable<IResponseUser> {
    return this.apiCallerService.get<string , IResponseUser>(this.apiUrl.getById , id);
  }
}
