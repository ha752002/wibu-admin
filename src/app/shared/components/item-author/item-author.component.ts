import { Component, Input } from '@angular/core';
import { IAuthor } from '../open-form/types/author.type';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { OpenModalComponent } from '../open-modal/open-modal.component';
import { PreviewTheUserComponent } from '../preview-the-user/preview-the-user.component';
import { IUser } from '../preview-the-user/type/user.types';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    NzButtonModule,
    NzAvatarModule,
    OpenModalComponent,
    PreviewTheUserComponent
  ],
  selector: 'app-item-author',
  templateUrl: './item-author.component.html',
  styleUrl: './item-author.component.scss'
})
export class ItemAuthorComponent {
  @Input() author?: IAuthor;
  @Input() user?: IUser;
  
  previewVisible = false;

  handleVisible(value: boolean) {
    this.previewVisible = value;
  }
}
