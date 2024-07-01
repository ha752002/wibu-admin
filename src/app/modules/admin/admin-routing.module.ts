import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AdminComponent} from "@app/modules/admin/admin.component";
import {MangaManagementComponent} from "@app/modules/admin/modules/manga-management/manga-management.component";
import {UserManagementComponent} from "@app/modules/admin/modules/user-management/user-management.component";
import {MyProfileComponent} from "@app/modules/admin/modules/my-profile/my-profile.component";

const routes: Routes = [{
  path: '',
  component: AdminComponent,
  children: [{
    path: 'manga',
    component: MangaManagementComponent
  }, {
    path: 'user',
    component: UserManagementComponent
  }, {
    path: 'my-profile',
    component: MyProfileComponent
  }]
}]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
