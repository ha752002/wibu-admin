import {NgModule} from '@angular/core';
import {UserManagementRoutingModule} from "@app/modules/admin/modules/user-management/user-management-routing.module";
import {UserListComponent} from './components/user-list/user-list.component';
import {UserItemComponent} from './components/user-item/user-item.component';
import {JsonPipe, NgClass} from "@angular/common";
import {UserManagementComponent} from "@app/modules/admin/modules/user-management/user-management.component";
import {RxLet} from "@rx-angular/template/let";
import {RxPush} from "@rx-angular/template/push";
import {
  NzListComponent,
  NzListHeaderComponent,
  NzListItemActionComponent,
  NzListItemActionsComponent,
  NzListItemComponent,
  NzListItemMetaComponent
} from "ng-zorro-antd/list";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzInputDirective, NzInputGroupComponent} from "ng-zorro-antd/input";
import {NzIconDirective} from "ng-zorro-antd/icon";


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
    NzListHeaderComponent,
    NgClass,
    NzButtonComponent,
    NzInputGroupComponent,
    NzInputDirective,
    NzIconDirective,
  ]
})
export class UserManagementModule {
}
