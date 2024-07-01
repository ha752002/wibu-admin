import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AuthComponent} from "@app/modules/auth/auth.component";


const routes: Routes = [{
  path: 'my-profile',
  component: AuthComponent,
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
