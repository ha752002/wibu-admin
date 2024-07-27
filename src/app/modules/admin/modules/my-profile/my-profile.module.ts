import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzInputModule } from 'ng-zorro-antd/input';
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { MyProfileRoutingModule } from './my-profile-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ItemInformationComponent } from '@app/shared/components/item-information/item-information.component';

@NgModule({
  declarations: [
    MyProfileComponent,
    UserComponent,
    UserDetailsComponent,
    
  ],
  imports: [
    CommonModule,
    NzInputModule,
    NzAvatarModule,
    MyProfileRoutingModule,
    SharedModule,
    NzIconModule,
    ItemInformationComponent,
  ]
})
export class MyProfileModule { }
