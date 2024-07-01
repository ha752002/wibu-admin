import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule} from "@app/modules/admin/admin-routing.module";
import {AdminComponent} from "@app/modules/admin/admin.component";

import {
  NzContentComponent,
  NzFooterComponent,
  NzHeaderComponent,
  NzLayoutComponent,
  NzSiderComponent
} from "ng-zorro-antd/layout";
import {LeftSidebarComponent} from '@app/modules/admin/components/left-sidebar/left-sidebar.component';
import {SidebarBodyComponent} from './components/left-sidebar/components/sidebar-body/sidebar-body.component';
import {NzMenuDirective, NzMenuItemComponent, NzSubMenuComponent} from "ng-zorro-antd/menu";
import {NzIconDirective} from "ng-zorro-antd/icon";


@NgModule({
  declarations: [AdminComponent, LeftSidebarComponent, SidebarBodyComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NzLayoutComponent,
    NzHeaderComponent,
    NzSiderComponent,
    NzContentComponent,
    NzFooterComponent,
    NzMenuItemComponent,
    NzIconDirective,
    NzSubMenuComponent,
    NzMenuDirective
  ]
})
export class AdminModule {
}
