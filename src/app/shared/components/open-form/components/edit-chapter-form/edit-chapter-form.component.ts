import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { DragDropImgComponent } from '@app/shared/components/drag-drop-img/drag-drop-img.component';
import { InputFieldComponent } from '@app/shared/components/input-field/input-field.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { IChapter, IResponseChapter, ISimpleChapter } from '../../types/chapter.type';
import { IStoryInformation } from '@app/modules/admin/modules/story/type/story.type';
import { Subscription } from 'rxjs';
import { ChapterService } from '../../services/chapter/chapter.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UploadService } from '@app/shared/services/upload/upload.service';
import { FormsModule } from '@angular/forms';
import { IChapterContent } from '@app/modules/admin/modules/chapter/types/chapter.type';

@Component({
  selector: 'app-edit-chapter-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DragDropImgComponent,
    InputFieldComponent,
    NzButtonModule
  ],
  templateUrl: './edit-chapter-form.component.html',
  styleUrl: './edit-chapter-form.component.scss'
})
export class EditChapterFormComponent implements OnInit ,OnDestroy{
  chapter: ISimpleChapter = {}
  chapterdata?: IChapterContent 
  img: string[] = []
  imageUrls: string[] = [];
  @Input() id?: string;
  @Input() storyData?: IStoryInformation
  @Input() ChapterData?: IChapter = {}
  @Output() complete = new EventEmitter<void>();
  @Output() change = new EventEmitter<void>();


  private subscriptions: Subscription = new Subscription();
  private messageId: string | null = null;

  constructor(
    private chapterService: ChapterService,
    private message: NzMessageService,
    private uploadService: UploadService,

  ) { }

  ngOnInit(): void {
    if (this.id) {
      this.getChapterDetails(this.id)
    }
  }

  getChapterDetails(id: string): void {
    this.chapterService.getChapterById(id).subscribe(
      (response) => {
        this.chapterdata = response.data;
        this.chapter.title= response.data.title;
        this.imageUrls = this.getImageUrls(response);     
        this.chapter.pages= this.imageUrls
   
      },
      (error) => {
        console.error('Error fetching author details:', error);
      }
    );
  }

  getImageUrls(response: IResponseChapter): string[] {
    return response.data.pages
      .map(page => page.imageUrl)
      .filter((url): url is string => url !== undefined);
  }

  onImagesSelected(images: string[]) {
    this.chapter.pages = images;
    this.change.emit();
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.id) {
      this.chapterService.updateChapter(this.id, this.chapter).subscribe(
        response => {
          this.createMessage('success')
          this.complete.emit();
        },
        error => {
          this.createMessage('error')
        }
      );
    }
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

  onFieldValueChange(field: keyof IChapter, value: string | number | Date | undefined): void {
    this.change.emit();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
