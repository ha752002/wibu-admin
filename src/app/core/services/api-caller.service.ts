import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpRequestOptions} from "@app/core/types/api.types";
import {environment} from "../../../environments/environment";
import _ from "lodash";

@Injectable({
  providedIn: 'root'
})
export class ApiCallerService {

  constructor(private _httpClient: HttpClient) {
  }

  public get<T, U>(endpoint: string, params?: T, options?: HttpRequestOptions) {
    return this._httpClient.get<U>(environment.apiUrl + endpoint + this._objectToRequestParams(params), options);
  }

  public post<T, U>(endpoint: string, body?: T, options?: HttpRequestOptions) {
    return this._httpClient.post<U>(environment.apiUrl + endpoint, body || {}, options);
  }

  private _objectToRequestParams<T>(obj?: T): string {
    if (!obj) return '';

    if (_.isObject(obj)) {
      return Object.entries(obj).reduce((prev, [key, value], index) => {
        prev += (index === 0 ? `?` : `&`) + `${key}=${value}`;
        return prev;
      }, '')
    }
    return obj;
  }
}
