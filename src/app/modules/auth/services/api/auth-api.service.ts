import {Injectable} from '@angular/core';
import {ApiCallerService} from "@app/core/services/api-caller.service";

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(private _apiCallerService: ApiCallerService) {
  }

}
