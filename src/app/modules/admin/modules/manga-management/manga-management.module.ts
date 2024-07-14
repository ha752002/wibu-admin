import { NgModule } from '@angular/core';
import { MangaManagementComponent } from './manga-management.component';
import {
  MangaManagementRoutingModule
} from "@app/modules/admin/modules/manga-management/manga-management-routing.module";
import { MangaListComponent } from './components/manga-list/manga-list.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { IconComponent } from '@app/shared/components/icon/icon.component';
import { OpenFormComponent } from '@app/shared/components/open-form/open-form.component';
import { InputFieldComponent } from '@app/shared/components/input-field/input-field.component';
import { CommonModule } from '@angular/common';
import { ListTableComponent } from './components/manga-list/components/list-table/list-table.component';
import { ListGridComponent } from './components/manga-list/components/list-grid/list-grid.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';


@NgModule({
  declarations: [
    MangaManagementComponent,
    MangaListComponent,
    ListTableComponent,
    ListGridComponent
  ],
  imports: [
    CommonModule,
    MangaManagementRoutingModule,
    NzTableModule,
    NzDividerModule,
    NzAvatarModule,
    IconComponent,
    OpenFormComponent,
    InputFieldComponent,
    NzListModule,
    NzCardModule,
    NzPaginationModule,
  ]
})
export class MangaManagementModule {
}
