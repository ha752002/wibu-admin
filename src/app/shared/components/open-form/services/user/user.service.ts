import { Injectable } from '@angular/core';
import { ApiCallerService } from '@app/core/services/api-caller.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICreateUser, IResponseUser, IUpdateUser } from '../../types/user.type';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.authEndpoint;

  constructor(private apiCallerService: ApiCallerService) { }

  getUserById(id: string): Observable<IResponseUser> {
    return this.apiCallerService.get<string , IResponseUser>(this.apiUrl.getById , id);
  }

  createUser(user: ICreateUser): Observable<IResponseUser> {
    return this.apiCallerService.post<ICreateUser, IResponseUser>(this.apiUrl.register, user);
  }

  updateUser(id: string, user: IUpdateUser): Observable<IResponseUser> {
    return this.apiCallerService.put<ICreateUser, IResponseUser>(`${this.apiUrl.update}/${id}`, user);
  }

  deleteUser(id: string): Observable<void> {
    return this.apiCallerService.patch<void>(this.apiUrl.delete.replace('{id}', id.toString()), {});
  }
}
