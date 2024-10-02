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
import { EMessageType } from '@app/core/enums/message.enums';
import { MessageService } from '../../services/message/message.service';

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

  constructor(private authorService: AuthorService, private message: MessageService) { }


  onSubmit(event: Event): void {
    event.preventDefault();
    this.message.createMessageloading();
    this.authorService.createAuthor(this.author).subscribe(
      response => {
        
        this.message.createMessage(EMessageType.SUCCESS , response.message)
        this.complete.emit();
      },
      error => {
        
        this.message.createMessage(EMessageType.ERROR , error)
      }
    );
  }

  onFieldValueChange(field: keyof ISimpleAuthor, value: string | number | Date | undefined): void {
    this.change.emit();
  }

  onAvatarUrlChange(url: IResponseImage) {
    this.author.avatarUrl = url.data.url;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
