import {createActionGroup, props} from "@ngrx/store";
import {ILoginPayload, ILoginResponse} from "@app/core/store/_auth/_auth.types";
import {IErrorResponse} from "@app/core/type/api.types";

export const authActions = createActionGroup({
  source: '[Auth]',
  events: {
    'Login': props<ILoginPayload>(),
    'Login success': props<ILoginResponse>(),
    'Login error': props<IErrorResponse>(),
  }
})
