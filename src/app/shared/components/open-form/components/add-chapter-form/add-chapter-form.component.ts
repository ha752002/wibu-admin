import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IChapter } from '@app/modules/admin/modules/story/story.component';
import { DragDropImgComponent } from '@app/shared/components/drag-drop-img/drag-drop-img.component';
import { InputFieldComponent } from '@app/shared/components/input-field/input-field.component';
import { UploadImgComponent } from '@app/shared/components/upload-img/upload-img.component';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    DragDropImgComponent,
    UploadImgComponent,
    InputFieldComponent,
    NzButtonModule
  ],
  selector: 'app-add-chapter-form',
  templateUrl: './add-chapter-form.component.html',
  styleUrl: './add-chapter-form.component.scss'
})
export class AddChapterFormComponent {
  chapter: IChapter = {}

  onImagesSelected(images: File[]) {
    this.chapter.image = images.map(file => URL.createObjectURL(file));
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    console.log('Form submitted:', this.chapter);
  }

    onFieldValueChange(field: keyof IChapter, value: string | number | Date | undefined): void {
    console.log(this.chapter);
  }
}
