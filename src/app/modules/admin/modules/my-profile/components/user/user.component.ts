import {Component, Input} from '@angular/core';
import {IUserInfo} from "@app/core/store/_auth/_auth.types";
import {MapUserRolePipe} from "@app/core/pipe/map-user-role.pipe";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  providers: [MapUserRolePipe]
})
export class UserComponent {
  @Input() userInfo?: IUserInfo;

  constructor() {
  }
}
