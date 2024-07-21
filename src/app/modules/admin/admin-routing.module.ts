import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "@app/modules/admin/admin.component";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'manga',
        loadChildren: () => import('./modules/manga-management/manga-management.module').then(module => module.MangaManagementModule)
      },
      {
        path: 'user',
        loadChildren: () => import('./modules/user-management/user-management.module').then(module => module.UserManagementModule)
      },
      {
        path: 'my-profile',
        loadChildren: () => import('./modules/my-profile/my-profile.module').then(module => module.MyProfileModule)
      },
      {
        path: 'story/:id',
        loadChildren: () => import('./modules/story/story.module').then(module => module.StoryModule)
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
