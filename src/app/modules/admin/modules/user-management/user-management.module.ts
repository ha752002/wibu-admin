import {NgModule} from '@angular/core';
import {UserManagementRoutingModule} from "@app/modules/admin/modules/user-management/user-management-routing.module";
import {UserListComponent} from './components/user-list/user-list.component';
import {UserItemComponent} from './components/user-item/user-item.component';
import {CommonModule, JsonPipe, NgClass} from "@angular/common";
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
import { OpenModalComponent } from '@app/shared/components/open-modal/open-modal.component';
import { PreviewTheUserComponent } from '@app/shared/components/preview-the-user/preview-the-user.component';
import { OpenFormComponent } from '@app/shared/components/open-form/open-form.component';
import { InputFieldComponent } from '@app/shared/components/input-field/input-field.component';


@NgModule({
  declarations: [
    UserListComponent,
    UserItemComponent,
    UserManagementComponent
  ],
  exports: [],
  imports: [
    CommonModule,
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
    OpenModalComponent,
    OpenFormComponent,
    PreviewTheUserComponent,
    InputFieldComponent,
  ]
})
export class UserManagementModule {
}
