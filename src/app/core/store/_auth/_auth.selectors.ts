import {createSelector} from "@ngrx/store";
import {MainState} from "@app/core/store/_store.types";

const selectAuth = (state: MainState) => state.auth;


export const selectUserInfo = createSelector(
  selectAuth,
  (authState) => authState.userInfo
);
