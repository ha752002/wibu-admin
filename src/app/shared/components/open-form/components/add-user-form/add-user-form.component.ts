import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InputFieldComponent } from '@app/shared/components/input-field/input-field.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ICreateUser } from '../../types/user.type';



@Component({
  standalone: true,
  imports: [
    CommonModule,
    NzFormModule,
    NzButtonModule,
    InputFieldComponent
  ],
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrl: './add-user-form.component.scss'
})
export class AddUserFormComponent {
  @ViewChild('userForm') userForm!: NgForm;

  user: ICreateUser = {
    name: '',
    phone: '',
    email: '',
    dateOfBirth: undefined,
    teams: '',
    userType: 'user',
    password: '',
  };

  userTypeList: string[] = ['user','admin','management'];

  confirmPassword: string = '';

  onSubmit(event: Event): void {
    event.preventDefault();

    if (this.userForm.valid) {
      if (this.user.password === this.confirmPassword) {
        console.log('Form submitted:', this.user);
       
      } else {
        console.log('Passwords do not match');
      }
    } else {
      console.log('Form is invalid');
    }
    console.log('Form submitted:', this.user);
  }

  onFieldValueChange(field: keyof ICreateUser, value: string | number | Date | undefined): void {

    console.log(this.user);
  }

  onPasswordValueChange(value: string): void {
    console.log(value);

  }
}
