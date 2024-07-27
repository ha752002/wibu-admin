import { Component, Input } from '@angular/core';
import { IUser } from '../../../my-profile/my-profile.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  @Input() listOfData?: IUser[] = [];

  previewVisible = false;
  selectedUser: IUser = {};
  selectUser(user: IUser): void {
    this.previewVisible = !this.previewVisible;
    console.log(this.previewVisible);
    this.selectedUser = user
  }

  handleVisible(value: boolean) {
    this.previewVisible = value;
  }
}
