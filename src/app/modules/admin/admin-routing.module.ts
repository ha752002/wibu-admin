import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AdminComponent} from "@app/modules/admin/admin.component";

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
        path: 'manga/:genreId',
        loadChildren: () => import('./modules/manga-management/manga-management.module').then(module => module.MangaManagementModule)
      },
      {
        path: 'my-profile',
        loadChildren: () => import('./modules/my-profile/my-profile.module').then(module => module.MyProfileModule)
      },
      {
        path: 'library',
        loadChildren: () => import('./modules/library/library.module').then(module => module.LibraryModule)
      },
      {
        path: 'story/:id',
        loadChildren: () => import('./modules/story/story.module').then(module => module.StoryModule)
      },
      {
        path: 'story/:storyid/chapter/:chapterId',
        loadChildren: () => import('./modules/chapter/chapter.module').then(module => module.ChapterModule)
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
export class AdminRoutingModule {
}
