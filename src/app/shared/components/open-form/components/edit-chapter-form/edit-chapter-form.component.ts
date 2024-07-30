import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DragDropImgComponent } from '@app/shared/components/drag-drop-img/drag-drop-img.component';
import { InputFieldComponent } from '@app/shared/components/input-field/input-field.component';
import { UploadImgComponent } from '@app/shared/components/upload-img/upload-img.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { IChapter } from '../../types/chapter.type';
import { IStoryInformation } from '@app/modules/admin/modules/story/type/story.type';

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
  chapter: IChapter = {}
  @Input() storyData?: IStoryInformation = {}
  @Input() ChapterData?: IChapter = {}

  ngOnInit(): void {
    this.chapter = this.ChapterData ?? {}
  }

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
