import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {authGuard} from "@app/core/guards/auth.guard";

const routes: Routes = [{
  path: 'auth',
  loadChildren: () => import('@app/modules/auth/auth.module').then(module => module.AuthModule)
}, {
  path: 'admin',
  loadChildren: () => import('@app/modules/admin/admin.module').then(module => module.AdminModule),
  canActivate: [authGuard]
}, {
  path: '**',
  redirectTo: 'auth/signIn',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes) ,],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
