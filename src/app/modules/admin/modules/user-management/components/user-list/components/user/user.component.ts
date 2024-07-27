import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '@app/modules/admin/modules/my-profile/my-profile.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input() user?: IUser;


}
