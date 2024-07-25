import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DragDropImgComponent } from '@app/shared/components/drag-drop-img/drag-drop-img.component';
import { InputFieldComponent } from '@app/shared/components/input-field/input-field.component';
import { UploadImgComponent } from '@app/shared/components/upload-img/upload-img.component';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-edit-chapter-form',
  standalone: true,
  imports: [
    CommonModule,
    DragDropImgComponent,
    UploadImgComponent,
    InputFieldComponent,
    NzButtonModule
  ],
  templateUrl: './edit-chapter-form.component.html',
  styleUrl: './edit-chapter-form.component.scss'
})
export class EditChapterFormComponent {

}
