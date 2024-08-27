import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { InputFieldComponent } from '@app/shared/components/input-field/input-field.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { IUpdateUser } from '../../types/user.type';
import { UserService } from '../../services/user/user.service';
import { UploadAvatarComponent } from '@app/shared/components/upload-avatar/upload-avatar.component';
import { FormsModule } from '@angular/forms';
import { EUserRole } from '@app/core/enums/user.enums';
import { IResponseImage } from '@app/shared/types/image.types';
import { NzMessageService } from 'ng-zorro-antd/message';


@Component({
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzFormModule,
    NzButtonModule,
    InputFieldComponent,
    UploadAvatarComponent
  ], selector: 'app-edit-user-form',
  templateUrl: './edit-user-form.component.html',
  styleUrl: './edit-user-form.component.scss'
})
export class EditUserFormComponent implements OnInit {
  @Input() id?: string;

  user: IUpdateUser = {
    username: 'haongvip',
    avatarUrl: 'http://res.cloudinary.com/dmqacudf0/image/upload/v1724750675/pyusa5jhxdiw0psrtlft.jpg',
    email: 'hoang03759@gmail.com',
    birthday: new Date(0),
    roles: [EUserRole.ROLE_USER],
  };

  roles: string[] = [EUserRole.ROLE_USER, EUserRole.ROLE_ADMIN];
  private messageId: string | null = null;

  constructor(
    private message: NzMessageService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    if (this.id) {
      this.getUserDetails(this.id)
    }
  }

  getUserDetails(id: string): void {
    this.userService.getUserById(id).subscribe(
      (response) => {
        this.user = response.data;
      },
      (error) => {
        console.error('Error fetching author details:', error);
      }
    );
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.id) {
      this.userService.updateUser(this.id, this.user).subscribe(
        (response) => {
        },
        (error) => {
          console.error('Error updating user:', error);
        }
      );
    }
  }

  onAvatarUrlChange(url: IResponseImage) {
    this.user.avatarUrl = url.data.url;
  }

  createMessageloading(): void {
    this.messageId = this.message.loading('Action in progress..', { nzDuration: 0 }).messageId;
  }

  createMessage(type: string): void {
    if (this.messageId) {
      this.message.remove(this.messageId);
    }
    this.message.create(type, `This is a message of ${type}`);
  }

  onFieldValueChange(field: keyof IUpdateUser, value: string | number | Date | undefined): void {
  }
}
