import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AuthComponent} from "@app/modules/auth/auth.component";
import { MyProfileComponent } from './my-profile.component';


const routes: Routes = [{
  path: '',
  component: MyProfileComponent,
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
export class MyProfileRoutingModule {
}
