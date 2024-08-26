import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { IUser } from './type/user.types';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    NzButtonModule,
    NzAvatarModule,
    UserProfileComponent
  ],
  selector: 'app-preview-the-user',
  templateUrl: './preview-the-user.component.html',
  styleUrl: './preview-the-user.component.scss'
})
export class PreviewTheUserComponent {
  @Input() user?: IUser;
}
