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
    loadChildren: () => import('./modules/manga-management/manga-management.module').then(module => module.MangaManagementModule)
  }, {
    path: 'user',
    loadChildren: () => import('./modules/user-management/user-management.module').then(module => module.UserManagementModule)
  }, {
    path: 'my-profile',
    loadChildren: () => import('./modules/my-profile/my-profile.module').then(module => module.MyProfileModule)
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
