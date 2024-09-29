import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { InputFieldComponent } from '@app/shared/components/input-field/input-field.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ICreateUser } from '../../types/user.type';
import { Subscription } from 'rxjs';
import { EUserRole } from '@app/core/enums/user.enums';
import { UploadAvatarComponent } from '@app/shared/components/upload-avatar/upload-avatar.component';
import { IResponseImage } from '@app/shared/types/image.types';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { UserService } from '../../services/user/user.service';
import { EMessageType } from '@app/core/enums/message.enums';
import { MessageService } from '../../services/message/message.service';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzFormModule,
    NzButtonModule,
    NzSelectModule,
    InputFieldComponent,
    UploadAvatarComponent
  ],
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrl: './add-user-form.component.scss'
})
export class AddUserFormComponent implements OnDestroy {
  @ViewChild('userForm') userForm!: NgForm;
  @Output() complete = new EventEmitter<void>();
  @Output() change = new EventEmitter<void>();

  user: ICreateUser = {
    username: 'haongvip',
    avatarUrl: 'http://res.cloudinary.com/dmqacudf0/image/upload/v1724750675/pyusa5jhxdiw0psrtlft.jpg',
    email: 'hoang03759@gmail.com',
    birthday: new Date(0),
    roles: [EUserRole.ROLE_USER],
    password: 'Hoang123#',
    confirmPassword: 'Hoang123#',
  };

  roles: string[] = [EUserRole.ROLE_USER, EUserRole.ROLE_ADMIN];

  private subscriptions: Subscription = new Subscription();
  private messageId: string | null = null;

  constructor(
    private message: MessageService,
    private userService: UserService
  ) { }
  onSubmit(event: Event): void {
    event.preventDefault();
    this.message.createMessageloading();

    this.user.birthday = new Date(this.user.birthday)
    this.userService.createUser(this.user).subscribe(
      response => {
        this.message.createMessage(EMessageType.SUCCESS , response.message)
        this.complete.emit();
      },
      error => {
        this.message.createMessage(EMessageType.ERROR , error)
      }
    );
  }

  onFieldValueChange(field: keyof ICreateUser, value: string | number | Date | undefined): void {
    this.change.emit();
  }

  onPasswordValueChange(value: string): void {
  }

  onAvatarUrlChange(url: IResponseImage) {
    this.user.avatarUrl = url.data.url;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
