import {Component, Input} from '@angular/core';
import {IUser} from "@app/modules/admin/modules/user-management/type/user.types";

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.scss'
})
export class UserItemComponent {
  @Input() user!: IUser;

}
