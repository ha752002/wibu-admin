import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InputFieldComponent } from '@app/shared/components/input-field/input-field.component';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-add-author-form',
  standalone: true,
  imports: [
    CommonModule,
    InputFieldComponent,
    NzButtonModule,
  ],
  templateUrl: './add-author-form.component.html',
  styleUrl: './add-author-form.component.scss'
})
export class AddAuthorFormComponent {

}
