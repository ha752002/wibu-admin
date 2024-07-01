import {NgModule} from '@angular/core';
import {MangaManagementComponent} from './manga-management.component';
import {
  MangaManagementRoutingModule
} from "@app/modules/admin/modules/manga-management/manga-management-routing.module";


@NgModule({
  declarations: [
    MangaManagementComponent
  ],
  imports: [
    MangaManagementRoutingModule
  ]
})
export class MangaManagementModule {
}
