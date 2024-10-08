import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {UserManagementComponent} from "@app/modules/admin/modules/user-management/user-management.component";

const routes: Routes = [{
  path: '',
  component: UserManagementComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule {
}
