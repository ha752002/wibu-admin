import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserManagementComponent} from "@app/modules/admin/modules/user-management/user-management.component";


@NgModule({
  declarations: [UserManagementComponent],
  imports: [
    CommonModule
  ]
})
export class UserManagementModule {
}
