import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { InputFieldComponent } from '@app/shared/components/input-field/input-field.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { IUpdateUser } from '../../types/user.type';
import { UserService } from '../../services/user/user.service';


@Component({
  standalone: true,
  imports: [
    CommonModule,
    NzFormModule,
    NzButtonModule,
    InputFieldComponent
  ],  selector: 'app-edit-user-form',
  templateUrl: './edit-user-form.component.html',
  styleUrl: './edit-user-form.component.scss'
})
export class EditUserFormComponent {
  @Input() id?: number;

  user: IUpdateUser = {
    name: '',
    phone: '',
    email: '',
    dateOfBirth: undefined,
    teams: 'sasasaasa',
    userType: 'user',
  };

  userTypeList: string[] = ['user','admin','management'];

  constructor(private userService: UserService) { }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.id) {
      this.userService.updateUser(this.id, this.user).subscribe(
        (response) => {
          console.log('User updated successfully:', response);
        },
        (error) => {
          console.error('Error updating user:', error);
        }
      );
    }
  }

  onFieldValueChange(field: keyof IUpdateUser, value: string | number | Date | undefined): void {
    console.log(this.user);
  }
}
