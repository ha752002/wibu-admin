import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStorys } from '../../story/type/story.type';
import { environment } from 'src/environments/environment';
import { ApiCallerService } from '@app/core/services/api-caller.service';
import { IResponseUsers, IUser } from '../type/user.types';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  private apiUrl = environment.authEndpoint;

  constructor(private apiCallerService: ApiCallerService) { }

  getAllUsers(): Observable<IResponseUsers> {
    return this.apiCallerService.get<null, IResponseUsers>(this.apiUrl.getAll);
  }
}
