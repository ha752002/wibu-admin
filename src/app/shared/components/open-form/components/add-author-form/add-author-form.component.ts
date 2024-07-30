import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InputFieldComponent } from '@app/shared/components/input-field/input-field.component';
import { UploadImgComponent } from '@app/shared/components/upload-img/upload-img.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { IAuthor } from '../../types/author.type';

@Component({
  selector: 'app-add-author-form',
  standalone: true,
  imports: [
    CommonModule,
    InputFieldComponent,
    NzButtonModule,
    UploadImgComponent
  ],
  templateUrl: './add-author-form.component.html',
  styleUrl: './add-author-form.component.scss'
})
export class AddAuthorFormComponent {
  author: IAuthor = {
    name: '',
    describe: '',
    avatar: '',
  };

  onSubmit(event: Event): void {
    event.preventDefault();
    console.log('Form submitted:', this.author);
  }

  onFieldValueChange(field: keyof IAuthor, value: string | number | Date | undefined): void {
    console.log(this.author);
  }

  receiveThumbnail(thumbnailUrl: NzUploadFile[]): void {
    if (thumbnailUrl.length === 1) {
      this.author.avatar = thumbnailUrl[0].url;
    } else {
      console.log('err');
    }
  }
}
