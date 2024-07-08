import {createReducer, on} from "@ngrx/store";
import {authActions} from "@app/core/store/_auth/_auth.actions";

const initialState = {}

export const authReducer = createReducer(
  initialState,
  on(authActions.login, (state) => {
    return state;
  })
)
