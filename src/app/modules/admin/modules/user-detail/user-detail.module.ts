import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailRoutingModule } from './user-detail-routing.module';
import { UserDetailComponent } from './user-detail.component';
import { PreviewTheUserComponent } from '@app/shared/components/preview-the-user/preview-the-user.component';


@NgModule({
  declarations: [
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    UserDetailRoutingModule,
    PreviewTheUserComponent
  ]
})
export class UserDetailModule { }
