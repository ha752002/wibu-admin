import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ICreateStory } from '../add-story-form/add-story-form.component';
import { NzUploadFile, NzUploadModule } from 'ng-zorro-antd/upload';
import { UploadImgComponent } from '@app/shared/components/upload-img/upload-img.component';
import { InputFieldComponent } from '@app/shared/components/input-field/input-field.component';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    NzUploadModule,
    UploadImgComponent,
    InputFieldComponent,
    NzButtonModule],
  selector: 'app-edit-story-form',
  templateUrl: './edit-story-form.component.html',
  styleUrl: './edit-story-form.component.scss'
})
export class EditStoryFormComponent implements OnInit{
  @Input() id?: number;
  @Input() img?: string;


  story: ICreateStory = {
    name: 'Triệu Hồi Đến Thế Giới Fantasy',

  };

  status: string[] = ['Updating','Halt','Full'];

  ngOnInit(): void {
    if (this.img) {
      this.story.thumbnail = this.img
    }
  }
  receiveThumbnail(thumbnailUrl: NzUploadFile[]): void {
    if (thumbnailUrl.length === 1) {
      this.story.thumbnail = thumbnailUrl[0].url;
    } else {
      console.log('err');
    }
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    console.log('Form submitted:', this.story);
  }

  onFieldValueChange(field: keyof ICreateStory, value: string | number | Date | undefined): void {
    console.log(this.story);
  }
}
