import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile.component';
// import {NzAvatarComponent} from "ng-zorro-antd/avatar";
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzInputModule } from 'ng-zorro-antd/input';
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { MyProfileRoutingModule } from './my-profile-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ItemInformationComponent } from './components/user-details/components/item-information/item-information.component';

@NgModule({
  declarations: [
    MyProfileComponent,
    UserComponent,
    UserDetailsComponent,
    ItemInformationComponent
  ],
  imports: [
    CommonModule,
    // NzAvatarComponent,
    NzInputModule,
    NzAvatarModule,
    MyProfileRoutingModule,
    SharedModule,
    NzIconModule
  ]
})
export class MyProfileModule { }
