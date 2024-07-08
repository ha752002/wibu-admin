import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserManagementComponent} from "@app/modules/admin/modules/user-management/user-management.component";
import {UserManagementRoutingModule} from "./user-management-routing.module";

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

import { UserListComponent } from './components/user-list/user-list.component';


@NgModule({
  declarations: [UserManagementComponent, UserListComponent],
  imports: [
    UserManagementRoutingModule,
    CommonModule,
    NzTableModule,
    NzDividerModule,
    NzAvatarModule
  ]
})
export class UserManagementModule {
}
