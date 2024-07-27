import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthApiService} from "@app/modules/auth/services/api/auth-api.service";
import {map} from "rxjs";
import {Store} from "@ngrx/store";
import {authActions} from "@app/core/store/_auth/_auth.actions";

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const store = inject(Store)

  const authService = inject(AuthApiService)
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) {
    return router.navigate(['/auth/login']);
  }
  return authService.getUserInfo().pipe(
    map(res => {
      localStorage.setItem("userInfo", JSON.stringify(res));
      store.dispatch(authActions.saveUserInfo(res))
      return !!res;
    })
  );
};
