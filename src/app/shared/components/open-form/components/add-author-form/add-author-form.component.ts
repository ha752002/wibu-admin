import { CommonModule } from '@angular/common';
import { finalize } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { Component, OnDestroy } from '@angular/core';
import { InputFieldComponent } from '@app/shared/components/input-field/input-field.component';
import { UploadImgComponent } from '@app/shared/components/upload-img/upload-img.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { IAuthor } from '../../types/author.type';
import { AuthorService } from '../../services/author/author.service';
import { UploadAvatarComponent } from '@app/shared/components/upload-avatar/upload-avatar.component';

@Component({
  selector: 'app-add-author-form',
  standalone: true,
  imports: [
    CommonModule,
    InputFieldComponent,
    NzButtonModule,
    UploadAvatarComponent
  ],
  templateUrl: './add-author-form.component.html',
  styleUrl: './add-author-form.component.scss'
})
export class AddAuthorFormComponent implements OnDestroy {
  author: IAuthor = {
    name: '',
    describe: '',
    avatar: '',
  };
  private subscriptions: Subscription = new Subscription();

  constructor(private authorService: AuthorService) { }


  onSubmit(event: Event): void {
    event.preventDefault();
    this.authorService.createAuthor(this.author).subscribe(
      response => {
        console.log('author created successfully', response);
      },
      error => {
        console.error('Error creating author', error);
      }
    );
  }

  onFieldValueChange(field: keyof IAuthor, value: string | number | Date | undefined): void {
    console.log(this.author);
  }

  onAvatarUrlChange(url: string) {
    this.author.avatar = url;
    console.log(this.author);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
