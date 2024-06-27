import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: 'auth',
  loadChildren: () => import('@app/modules/auth/auth.module').then(module => module.AuthModule)
}, {
  path: '**',
  redirectTo: 'auth/signIn',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
