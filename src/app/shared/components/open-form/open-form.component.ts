import { Component, EventEmitter, Input, Output } from '@angular/core';
import { formNameTypes } from './open-form.types';
import { CommonModule } from '@angular/common';
import { AddUserFormComponent } from './components/add-user-form/add-user-form.component';
import { EditUserFormComponent } from './components/edit-user-form/edit-user-form.component';
import { AddStoryFormComponent } from './components/add-story-form/add-story-form.component';
import { EditStoryFormComponent } from './components/edit-story-form/edit-story-form.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { IconComponent } from '../icon/icon.component';
import { IconNameTypes } from '../icon/icon.types';

@Component({
  selector: 'app-open-form',
  standalone: true,
  imports: [
    CommonModule,
    NzButtonModule,
    IconComponent,
    AddUserFormComponent,
    EditUserFormComponent,
    AddStoryFormComponent,
    EditStoryFormComponent
  ],
  templateUrl: './open-form.component.html',
  styleUrl: './open-form.component.scss'
})
export class OpenFormComponent {
  @Input() formName: formNameTypes = 'add story';
  @Input() currentForm?: formNameTypes | null = null;
  @Input() icon: IconNameTypes = 'plus';
  @Input() buttonType: 'success' | 'warning' | 'danger' | 'default' = 'default';
  @Input() id?: number;

  openForm() {
    console.log(this.formName);
    this.currentForm = this.formName
  }

  closeForm() {
    this.currentForm = null
  }

  blockFormClosing(event: MouseEvent) {
    event.stopPropagation(); // Ngăn chặn sự kiện lan truyền lên thẻ cha
    console.log('Child clicked');
  }
}
