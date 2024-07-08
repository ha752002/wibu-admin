import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ApiCallerService} from "@app/core/services/api-caller.service";
import {asapScheduler, catchError, map, scheduled, switchMap} from "rxjs";
import {ActionProps, ILoginPayload, ILoginResponse} from "@app/core/store/_auth/_auth.types";
import {authActions} from "@app/core/store/_auth/_auth.actions";
import {IResponseTemplate} from "@app/core/type/api.types";
import {NzMessageService} from "ng-zorro-antd/message";


export class AuthEffect {
  loginEffect = createEffect(() => this._$actions.pipe(
    ofType(authActions.login.type),
    switchMap(({payload}: ActionProps<ILoginPayload>) => this._apiCallerService.post<ILoginPayload, IResponseTemplate<ILoginResponse>>('', payload).pipe(
      map(({data}) => {
        return authActions.loginSuccess(data);
      }),
      catchError(({errors}: IResponseTemplate) => {

        return scheduled([authActions.loginError(errors?.[0])], asapScheduler);
      })
    ))
  ))

  constructor(private _$actions: Actions,
              private _apiCallerService: ApiCallerService,
              private _nzMsgService: NzMessageService
  ) {
  }
}
