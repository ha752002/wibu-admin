import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DragDropImgComponent } from '@app/shared/components/drag-drop-img/drag-drop-img.component';
import { InputFieldComponent } from '@app/shared/components/input-field/input-field.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { IChapter } from '../../types/chapter.type';
import { IStoryInformation } from '@app/modules/admin/modules/story/type/story.type';
import { Subscription } from 'rxjs';
import { ChapterService } from '../../services/chapter/chapter.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-edit-chapter-form',
  standalone: true,
  imports: [
    CommonModule,
    DragDropImgComponent,
    InputFieldComponent,
    NzButtonModule
  ],
  templateUrl: './edit-chapter-form.component.html',
  styleUrl: './edit-chapter-form.component.scss'
})
export class EditChapterFormComponent {
  chapter: IChapter = {}
  img: File[] = []
  @Input() id?: string;
  @Input() storyData?: IStoryInformation = {}
  @Input() ChapterData?: IChapter = {}
  @Output() complete = new EventEmitter<void>();
  @Output() change = new EventEmitter<void>();


  private subscriptions: Subscription = new Subscription();
  private messageId: string | null = null;

  constructor(
    private chapterService: ChapterService,
    private message: NzMessageService,

  ) { }

  ngOnInit(): void {
    this.chapter = this.ChapterData ?? {}
    if (this.id) {
      this.getChapterDetails(this.id)
    }
  }

  getChapterDetails(id: string): void {
    this.chapterService.getChapterById(id).subscribe(
      (response) => {
        this.chapter = response.data;
      },
      (error) => {
        console.error('Error fetching author details:', error);
      }
    );
  }

  onImagesSelected(images: File[]) {
    this.img = images;
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    // this.createMessageloading();

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
}
