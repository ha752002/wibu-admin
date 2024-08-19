import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { InputFieldComponent } from '@app/shared/components/input-field/input-field.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { IAuthor } from '../../types/author.type';
import { UploadAvatarComponent } from '@app/shared/components/upload-avatar/upload-avatar.component';
import { AuthorService } from '../../services/author/author.service';

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
  @Input() id?: string;

  author: IAuthor = {
    name: '',
    description: '',
    avatarUrl: '',
  };

  constructor(private authorService: AuthorService) { }


  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.id) {
      this.authorService.updateAuthor(this.id, this.author).subscribe(
        (response) => {
        },
        (error) => {
          console.error('Error updating author:', error);
        }
      );
    }
  }

  onFieldValueChange(field: keyof IAuthor, value: string | number | Date | undefined): void {
  }

  onAvatarUrlChange(url: string) {
    this.author.avatarUrl = url;
  }
}
