import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InputFieldComponent } from '@app/shared/components/input-field/input-field.component';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-edit-author-form',
  standalone: true,
  imports: [
    CommonModule,
    InputFieldComponent,
    NzButtonModule,
  ],
  templateUrl: './edit-author-form.component.html',
  styleUrl: './edit-author-form.component.scss'
})
export class EditAuthorFormComponent {

}
