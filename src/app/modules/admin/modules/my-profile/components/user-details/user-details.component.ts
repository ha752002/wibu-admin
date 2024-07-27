import {Component, Input} from '@angular/core';
import {IUserInfo} from "@app/core/store/_auth/_auth.types";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  @Input() userInfo?: IUserInfo;
}
