import {NgModule} from '@angular/core';
import {UserManagementRoutingModule} from "@app/modules/admin/modules/user-management/user-management-routing.module";
import {UserListComponent} from './components/user-list/user-list.component';
import {UserItemComponent} from './components/user-item/user-item.component';
import {JsonPipe} from "@angular/common";
import {UserManagementComponent} from "@app/modules/admin/modules/user-management/user-management.component";
import {RxLet} from "@rx-angular/template/let";
import {RxPush} from "@rx-angular/template/push";
import {
  NzListComponent,
  NzListItemActionComponent,
  NzListItemActionsComponent,
  NzListItemComponent,
  NzListItemMetaComponent
} from "ng-zorro-antd/list";


@NgModule({
  declarations: [
    UserListComponent,
    UserItemComponent,
    UserManagementComponent
  ],
  exports: [],
  imports: [
    UserManagementRoutingModule,
    JsonPipe,
    RxLet,
    RxPush,
    NzListComponent,
    NzListItemComponent,
    NzListItemMetaComponent,
    NzListItemActionComponent,
    NzListItemActionsComponent,
  ]
})
export class UserManagementModule {
}
