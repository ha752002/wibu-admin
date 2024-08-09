import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { InputFieldComponent } from '@app/shared/components/input-field/input-field.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { IAuthor } from '../../types/author.type';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { UploadImgComponent } from '@app/shared/components/upload-img/upload-img.component';
import { UploadAvatarComponent } from '@app/shared/components/upload-avatar/upload-avatar.component';

@Component({
  selector: 'app-edit-author-form',
  standalone: true,
  imports: [
    CommonModule,
    InputFieldComponent,
    NzButtonModule,
    UploadAvatarComponent
  ],
  templateUrl: './edit-author-form.component.html',
  styleUrl: './edit-author-form.component.scss'
})
export class EditAuthorFormComponent {
  @Input() id?: number;

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

  onAvatarUrlChange(url: string) {
    this.author.avatar = url;
    console.log(this.author);
  }
}
