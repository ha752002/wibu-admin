import {createActionGroup, props} from "@ngrx/store";
import {ActionProps, ILoginPayload, ILoginResponse, IUserInfoResponse} from "@app/core/store/_auth/_auth.types";
import {IErrorResponse} from "@app/core/types/api.types";

export const authActions = createActionGroup({
  source: '[Auth]',
  events: {
    'Login': props<ActionProps<ILoginPayload>>(),
    'Login success': props<ILoginResponse>(),
    'Login error': props<IErrorResponse>(),
    'Save user info': props<IUserInfoResponse>(),
  }
})
