import { Component, Input } from '@angular/core';
import { User } from '../../my-profile.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  @Input() user?: User = {
    avatarUrl: '',
    name: '',
    phone: '',
    email: '',
    followers: 0,
    postedStories: 0,
    followStory: 0,
    userType: '',
    teams: '',
    dateOfBirth: new Date(),
    roles: []
  };;

}
