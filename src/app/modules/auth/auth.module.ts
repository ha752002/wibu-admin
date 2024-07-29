import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './components/login/login.component';
import {AuthRoutingModule} from "@app/modules/auth/auth-routing.module";
import {RegisterComponent} from './components/register/register.component';
import {NzInputDirective, NzInputGroupComponent} from "ng-zorro-antd/input";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {AuthComponent} from "@app/modules/auth/auth.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthFormService} from "@app/modules/auth/services/form/auth-form.service";
import {NzFormControlComponent, NzFormDirective, NzFormItemComponent} from "ng-zorro-antd/form";


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
    NzButtonComponent,
    ReactiveFormsModule,
    NzFormDirective,
    NzFormItemComponent,
    NzFormControlComponent,
    NzInputGroupComponent
  ],
  providers: [
    AuthFormService
  ]
})
export class AuthModule {
}
