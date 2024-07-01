import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './components/login/login.component';
import {AuthRoutingModule} from "@app/modules/auth/auth-routing.module";
import {RegisterComponent} from './components/register/register.component';
import {NzInputDirective} from "ng-zorro-antd/input";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {AuthComponent} from "@app/modules/auth/auth.component";


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NzInputDirective,
    NzButtonComponent
  ]
})
export class AuthModule {
}
