import { Component, Input } from '@angular/core';
import { User } from '../../../my-profile/my-profile.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  @Input() listOfData?: User[] = [];
  
}
