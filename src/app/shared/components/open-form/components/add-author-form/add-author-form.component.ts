import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { InputFieldComponent } from '@app/shared/components/input-field/input-field.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ISimpleAuthor } from '../../types/author.type';
import { AuthorService } from '../../services/author/author.service';
import { UploadAvatarComponent } from '@app/shared/components/upload-avatar/upload-avatar.component';
import { FormsModule } from '@angular/forms';
import { IPage, IResponseImage } from '@app/shared/types/image.types';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-add-author-form',
  standalone: true,
  imports: [
    CommonModule,
    InputFieldComponent,
    NzButtonModule,
    UploadAvatarComponent,
    FormsModule,
  ],
  templateUrl: './add-author-form.component.html',
  styleUrl: './add-author-form.component.scss'
})
export class AddAuthorFormComponent implements OnDestroy {
  @Output() complete = new EventEmitter<void>();
  @Output() change = new EventEmitter<void>();
  private messageId: string | null = null;

  author: ISimpleAuthor = {
    name: '',
    description: '',
    avatarUrl: '',
  };
  private subscriptions: Subscription = new Subscription();

  constructor(private authorService: AuthorService, private message: NzMessageService) { }


  onSubmit(event: Event): void {
    event.preventDefault();
    this.createMessageloading();
    this.authorService.createAuthor(this.author).subscribe(
      response => {
        
        this.createMessage('success')
        this.complete.emit();
      },
      error => {
        
        this.createMessage('error')
      }
    );
  }

  onFieldValueChange(field: keyof ISimpleAuthor, value: string | number | Date | undefined): void {
    this.change.emit();
  }

  onAvatarUrlChange(url: IResponseImage) {
    this.author.avatarUrl = url.data.url;
    console.log(this.author);
  }

  createMessageloading(): void {
    this.messageId = this.message.loading('Action in progress..', { nzDuration: 0 }).messageId;
  }

  createMessage(type: string): void {
    if (this.messageId) {
      this.message.remove(this.messageId);
    }
    this.message.create(type, `This is a message of ${type}`);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
