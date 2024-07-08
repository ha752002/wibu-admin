import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserManagementComponent} from "@app/modules/admin/modules/user-management/user-management.component";
import {UserManagementRoutingModule} from "./user-management-routing.module";


@NgModule({
  declarations: [UserManagementComponent],
  imports: [
    UserManagementRoutingModule,
    CommonModule
  ]
})
export class UserManagementModule {
}
