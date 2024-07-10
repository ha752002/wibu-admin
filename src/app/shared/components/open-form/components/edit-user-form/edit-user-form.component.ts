import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { InputFieldComponent } from '@app/shared/components/input-field/input-field.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';

export interface IUpdateUser {
  id?: number;
  avatarUrl?: string;
  name?: string;
  phone?: string;
  email?: string;
  dateOfBirth?: Date;
  teams?: string;
  userType?: string;
}

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
    userType: '',
  };

  onSubmit(event: Event): void {
    event.preventDefault();
    console.log('Form submitted:', this.user);
  }

  onFieldValueChange(field: keyof IUpdateUser, value: string | number | Date | undefined): void {
    console.log(this.user);
  }
}
