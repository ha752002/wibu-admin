import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { DragDropImgComponent } from '@app/shared/components/drag-drop-img/drag-drop-img.component';
import { InputFieldComponent } from '@app/shared/components/input-field/input-field.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { IChapter } from '../../types/chapter.type';
import { IStoryInformation } from '@app/modules/admin/modules/story/type/story.type';
import { UploadService } from '@app/shared/services/upload/upload.service';
import { ChapterService } from '../../services/chapter/chapter.service';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

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
export class AddChapterFormComponent implements OnInit ,OnDestroy{
  chapter: IChapter = {}
  img: File[] = []
  @Input() storyData?: IStoryInformation = {}
  @Output() complete = new EventEmitter<void>();
  private subscriptions: Subscription = new Subscription();

  constructor(
    private uploadService: UploadService,
    private chapterService: ChapterService
  ) { }

  ngOnInit(): void {
    
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.img.length > 0) {
      this.uploadImagesAndSubmitChapter();
    } else {
      console.error('Error creating chapter:');
    }
  }

  uploadImagesAndSubmitChapter(): void {
    this.uploadService.uploadImages(this.img).subscribe(
      (urls: string[]) => {
        this.chapter.image = urls;
        this.submitChapter();
      },
      
      error => {
        console.error('Error uploading images:', error);
      }
    );
  }

  submitChapter(): void {
    this.chapterService.createChapter(this.chapter).subscribe(
      response => {
        this.complete.emit();        
      },
      error => {
        console.error('Error creating chapter:', error);
      }
    );
  }



  getLastChapter(): IChapter | undefined {
    if (this.storyData?.chapters && this.storyData.chapters.length > 0) {
      return this.storyData.chapters[this.storyData.chapters.length - 1];
    }
    return undefined;
  }

  onImagesSelected(images: File[]) {
    this.img = images;
  }

  onFieldValueChange(field: keyof IChapter, value: string | number | Date | undefined): void {
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
