import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { InputFieldComponent } from '@app/shared/components/input-field/input-field.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { IAuthor, ISimpleAuthor } from '../../types/author.type';
import { UploadAvatarComponent } from '@app/shared/components/upload-avatar/upload-avatar.component';
import { AuthorService } from '../../services/author/author.service';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { IPage, IResponseImage } from '@app/shared/types/image.types';

@Component({
  selector: 'app-edit-author-form',
  standalone: true,
  imports: [
    CommonModule,
    InputFieldComponent,
    NzButtonModule,
    UploadAvatarComponent,
    FormsModule,
  ],
  templateUrl: './edit-author-form.component.html',
  styleUrl: './edit-author-form.component.scss'
})
export class EditAuthorFormComponent implements OnInit, OnDestroy {
  @Input() id?: string;
  @Output() complete = new EventEmitter<void>();
  private subscriptions: Subscription = new Subscription();

  author: ISimpleAuthor = {
    name: '',
    description: '',
    avatarUrl: '',
  };

  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
    if (this.id) {
      this.getAuthorDetails(this.id)
    }
  }

  getAuthorDetails(id: string): void {
    this.authorService.getAuthorById(id).subscribe(
      (response) => {
        this.author = response.data;
      },
      (error) => {
        console.error('Error fetching author details:', error);
      }
    );
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.id) {
      this.authorService.updateAuthor(this.id, this.author).subscribe(
        (response) => {
          this.complete.emit();     
        },
        (error) => {
          console.error('Error updating author:', error);
        }
      );
    }
  }

  onFieldValueChange(field: keyof IAuthor, value: string | number | Date | undefined): void {
  }

  onAvatarUrlChange(url: IResponseImage) {
    this.author.avatarUrl = url.data.url;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
