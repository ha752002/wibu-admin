import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "@app/modules/auth/components/login/login.component";
import {AuthComponent} from "@app/modules/auth/auth.component";
import {RegisterComponent} from "@app/modules/auth/components/register/register.component";


const routes: Routes = [{
  path: '',
  component: AuthComponent,
  children: [
    {
      path: 'signIn',
      component: LoginComponent
    },
    {
      path: 'signUp',
      component: RegisterComponent
    }
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class AuthRoutingModule {
}
