import {Injectable} from '@angular/core';
import {ApiCallerService} from "@app/core/services/api-caller.service";
import {environment} from "../../../../../environments/environment";
import {map} from "rxjs";
import {IUserInfoResponse} from "@app/core/store/_auth/_auth.types";
import {IResponseTemplate} from "@app/core/types/api.types";

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(private _apiCallerService: ApiCallerService) {
  }

  getUserInfo() {
    return this._apiCallerService.get<null, IResponseTemplate<IUserInfoResponse>>(environment.authEndpoint.getUserInfo).pipe(
      map(res => res.data)
    )
  }

}
