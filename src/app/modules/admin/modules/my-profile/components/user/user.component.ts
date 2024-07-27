import { Component, Input } from '@angular/core';
import { IUser } from '../../my-profile.component';

@Component({
  selector: 'app-user',
  
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input() user?: IUser;
  
  constructor() {}
}
