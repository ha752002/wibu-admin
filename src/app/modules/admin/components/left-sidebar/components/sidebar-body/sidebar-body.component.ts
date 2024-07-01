import {Component} from '@angular/core';
import {ADMIN_ROUTES} from "@app/core/types/routes.types";

@Component({
  selector: 'app-sidebar-body',
  templateUrl: './sidebar-body.component.html',
  styleUrl: './sidebar-body.component.scss'
})
export class SidebarBodyComponent {
  protected readonly ADMIN_ROUTES = ADMIN_ROUTES;
}
