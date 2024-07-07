import { Component, Input } from '@angular/core';
import { User } from '../../my-profile.component';
// import {IconComponent} from '../../../../../../shared/components/icon/icon.component'

@Component({
  selector: 'app-user',
  
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input() user?: User;
  
  constructor() {}
}
