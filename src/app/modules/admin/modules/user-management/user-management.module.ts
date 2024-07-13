import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DragDropModule } from '@angular/cdk/drag-drop';
// import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NzSelectModule } from 'ng-zorro-antd/select';

import {UserManagementComponent} from "@app/modules/admin/modules/user-management/user-management.component";
import {UserManagementRoutingModule} from "./user-management-routing.module";

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzModalModule } from 'ng-zorro-antd/modal';

import { UserListComponent } from './components/user-list/user-list.component';
import { OpenFormComponent } from '@app/shared/components/open-form/open-form.component';
import { IconComponent } from '@app/shared/components/icon/icon.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { InputFieldComponent } from '@app/shared/components/input-field/input-field.component';


@NgModule({
  declarations: [UserManagementComponent, UserListComponent],
  imports: [
    UserManagementRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzTableModule,
    NzDividerModule,
    NzAvatarModule,
    NzButtonModule,
    NzModalModule ,
    NzGridModule,
    NzSelectModule,
    IconComponent,
    OpenFormComponent,
    InputFieldComponent,
    DragDropModule,
  ]
})
export class UserManagementModule {
}
