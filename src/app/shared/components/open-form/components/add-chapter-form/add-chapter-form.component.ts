import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { DragDropImgComponent } from '@app/shared/components/drag-drop-img/drag-drop-img.component';
import { InputFieldComponent } from '@app/shared/components/input-field/input-field.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { IChapter, ISimpleChapter } from '../../types/chapter.type';
import { IStoryInformation } from '@app/modules/admin/modules/story/type/story.type';
import { UploadService } from '@app/shared/services/upload/upload.service';
import { ChapterService } from '../../services/chapter/chapter.service';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    DragDropImgComponent,
    InputFieldComponent,
    NzButtonModule,
    FormsModule
  ],
  selector: 'app-add-chapter-form',
  templateUrl: './add-chapter-form.component.html',
  styleUrl: './add-chapter-form.component.scss'
})
export class AddChapterFormComponent implements OnInit, OnDestroy {
  chapter: ISimpleChapter = {
    pages: [
      'https://dtcdnyacd.com/nettruyen/trieu-hoi-den-the-gioi-fantasy/0/1.jpg',
      'https://dtcdnyacd.com/nettruyen/trieu-hoi-den-the-gioi-fantasy/0/2.jpg',
      'https://dtcdnyacd.com/nettruyen/trieu-hoi-den-the-gioi-fantasy/0/3.jpg',
      'https://dtcdnyacd.com/nettruyen/trieu-hoi-den-the-gioi-fantasy/0/4.jpg',
      'https://dtcdnyacd.com/nettruyen/trieu-hoi-den-the-gioi-fantasy/0/5.jpg',
      'https://dtcdnyacd.com/nettruyen/trieu-hoi-den-the-gioi-fantasy/0/6.jpg',
      'https://dtcdnyacd.com/nettruyen/trieu-hoi-den-the-gioi-fantasy/0/7.jpg',
      'https://dtcdnyacd.com/nettruyen/trieu-hoi-den-the-gioi-fantasy/0/8.jpg',
      'https://dtcdnyacd.com/nettruyen/trieu-hoi-den-the-gioi-fantasy/0/9.jpg',
      'https://dtcdnyacd.com/nettruyen/trieu-hoi-den-the-gioi-fantasy/0/10.jpg',
      'https://dtcdnyacd.com/nettruyen/trieu-hoi-den-the-gioi-fantasy/0/11.jpg',
      'https://dtcdnyacd.com/nettruyen/trieu-hoi-den-the-gioi-fantasy/0/12.jpg',
      'https://dtcdnyacd.com/nettruyen/trieu-hoi-den-the-gioi-fantasy/0/13.jpg',
      'https://dtcdnyacd.com/nettruyen/trieu-hoi-den-the-gioi-fantasy/0/14.jpg',
      'https://dtcdnyacd.com/nettruyen/trieu-hoi-den-the-gioi-fantasy/0/15.jpg',
    ],
  }
  img: string[] = []
  @Input() storyData?: IStoryInformation;
  @Output() complete = new EventEmitter<void>();
  @Output() change = new EventEmitter<void>();

  private subscriptions: Subscription = new Subscription();
  private messageId: string | null = null;
  constructor(
    private message: NzMessageService,
    private uploadService: UploadService,
    private chapterService: ChapterService
  ) { }

  ngOnInit(): void {
    this.chapter.mangaId = this.storyData?.id
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.chapterService.createChapter(this.chapter).subscribe(
      response => {
        this.createMessage('success')
        this.complete.emit();
      },
      error => {
        this.createMessage('error')
      }
    );
  }

  getLastChapter(): IChapter | undefined {
    if (this.storyData?.chapters && this.storyData.chapters.length > 0) {
      return this.storyData.chapters[this.storyData.chapters.length - 1];
    }
    return undefined;
  }

  onImagesSelected(images: string[]) {
    this.chapter.pages = images;
    this.change.emit();
  }

  onFieldValueChange(field: keyof IChapter, value: string | number | Date | undefined): void {
    this.change.emit();
  }

  createMessageloading(): void {
    this.messageId = this.message.loading('Action in progress..', { nzDuration: 0 }).messageId;
  }

  createMessage(type: string): void {
    if (this.messageId) {
      this.message.remove(this.messageId);
    }
    this.message.create(type, `chapter added ${type}`);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
