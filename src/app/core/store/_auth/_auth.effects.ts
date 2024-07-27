import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ApiCallerService} from "@app/core/services/api-caller.service";
import {catchError, EMPTY, map, switchMap} from "rxjs";
import {ActionProps, ILoginPayload, ILoginResponse} from "@app/core/store/_auth/_auth.types";
import {authActions} from "@app/core/store/_auth/_auth.actions";
import {IResponseTemplate} from "@app/core/types/api.types";
import {NzMessageService} from "ng-zorro-antd/message";
import {Injectable} from "@angular/core";
import {environment} from "../../../../environments/environment";

@Injectable()
export class AuthEffect {
  loginEffect = createEffect(() => this._$actions.pipe(
    ofType(authActions.login.type),
    switchMap(({payload}: ActionProps<ILoginPayload>) => {
      return this._apiCallerService.post<ILoginPayload, IResponseTemplate<ILoginResponse>>(environment.authEndpoint.login, payload).pipe(
        map(({data}) => {
          return authActions.loginSuccess(data);
        }),
        catchError(({message}: IResponseTemplate) => {
          this._nzMsgService.error(message);
          return EMPTY;
        })
      )
    })
  ))

  constructor(private _$actions: Actions,
              private _apiCallerService: ApiCallerService,
              private _nzMsgService: NzMessageService
  ) {
  }
}
