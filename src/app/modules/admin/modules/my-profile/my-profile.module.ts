import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NzAvatarModule} from 'ng-zorro-antd/avatar';
import {NzInputModule} from 'ng-zorro-antd/input';
import {MyProfileRoutingModule} from './my-profile-routing.module';
import {SharedModule} from '@app/shared/shared.module';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {RxPush} from "@rx-angular/template/push";
import {RxLet} from "@rx-angular/template/let";
import {MapUserRolePipe} from "@app/core/pipe/map-user-role.pipe";
import {
  UserDetailsComponent
} from "@app/modules/admin/modules/my-profile/components/user-details/user-details.component";
import {UserComponent} from "@app/modules/admin/modules/my-profile/components/user/user.component";
import {MyProfileComponent} from "@app/modules/admin/modules/my-profile/my-profile.component";

@NgModule({
  declarations: [UserDetailsComponent, UserComponent, MyProfileComponent],
  imports: [
    CommonModule,
    NzInputModule,
    NzAvatarModule,
    MyProfileRoutingModule,
    SharedModule,
    NzIconModule,
    RxPush,
    RxLet,
    MapUserRolePipe,
  ]
})
export class MyProfileModule {
}
