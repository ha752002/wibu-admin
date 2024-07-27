import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AuthComponent} from "@app/modules/auth/auth.component";
import { MangaManagementComponent } from './manga-management.component';

const routes: Routes = [{
  path: '',
  component: MangaManagementComponent,
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
export class MangaManagementRoutingModule {
}
