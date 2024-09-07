import {Component, Input} from '@angular/core';
import {IUser} from "@app/modules/admin/modules/user-management/type/user.types";
import {size} from "lodash";

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.scss'
})
export class UserItemComponent {
  @Input() user!: IUser;
  defaultAvatar: string = 'assets/img/user.png';
  @Input() isLast!: boolean;
  @Input() isEven!: boolean;
  
  protected readonly size = size;
  previewVisible = false;
  selectedUser?: IUser ;

  handleHiddenVisible(value: boolean) {
    this.previewVisible = value;
    
  }

  handleVisible() {
    this.previewVisible = !this.previewVisible;
  }
}
