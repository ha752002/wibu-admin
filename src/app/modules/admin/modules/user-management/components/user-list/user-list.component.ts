import {Component, Input} from '@angular/core';
import {IUser} from "@app/modules/admin/modules/user-management/type/user.types";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  @Input() userList!: IUser[];

}
