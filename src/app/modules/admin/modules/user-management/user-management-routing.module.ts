import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AuthComponent} from "@app/modules/auth/auth.component";
import { UserManagementComponent } from './user-management.component';


const routes: Routes = [{
  path: '',
  component: UserManagementComponent,
  children: [] 
}];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserManagementRoutingModule {
}
