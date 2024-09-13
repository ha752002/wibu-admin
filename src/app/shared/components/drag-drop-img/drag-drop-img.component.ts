import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { ImgComponent } from '../img/img.component';
import { IconComponent } from '../icon/icon.component';
import { IImage } from '@app/shared/types/image.types';
import { Subscription } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UploadService } from '@app/shared/services/upload/upload.service';


@Component({
  selector: 'app-drag-drop-img',
  standalone: true,
  imports: [
    CommonModule,
    ImgComponent,
    IconComponent
  ],
  templateUrl: './drag-drop-img.component.html',
  styleUrl: './drag-drop-img.component.scss'
})
export class DragDropImgComponent implements OnInit, OnDestroy {
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() imgData: string[] = []

  @Output() imagesSelected = new EventEmitter<File[]>();
  @Output() imagesUrl = new EventEmitter<string[]>();

  imageFiles: File[] = [];
  imagePreviews: IImage[] = [];
  imageUrls: string[] = [];

  private subscriptions: Subscription = new Subscription();
  private messageId: string | null = null;

  constructor(
    private message: NzMessageService,
    private uploadService: UploadService,
  ) { }

  ngOnInit(): void {
    this.imgData.forEach((url) => {
      this.imagePreviews.push({ url });
    });
    this.imageUrls = this.imgData;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['imgData']) {
      this.imgData.forEach((url) => {
        this.imagePreviews.push({ url });
      });
      this.imageUrls = this.imgData;
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const element = event.target as HTMLElement;
    element.classList.add('drag-over');
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const element = event.target as HTMLElement;
    element.classList.remove('drag-over');
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const element = event.target as HTMLElement;
    element.classList.remove('drag-over');

    const items = event.dataTransfer?.items;
    if (items) {
      this.handleItems(items);
    }
  }

  handleItems(items: DataTransferItemList) {
    const promises: Promise<void>[] = [];
    for (let i = 0; i < items.length; i++) {
      const item = items[i].webkitGetAsEntry();
      if (item) {
        promises.push(this.traverseFileTree(item));
      }
    }
    Promise.all(promises).then(() => {
      this.sortAndUploadImages();
    });
  }

  traverseFileTree(item: any): Promise<void> {
    return new Promise((resolve) => {
      if (item.isFile) {
        item.file((file: File) => {
          if (file.type.startsWith('image/')) {
            this.imageFiles.push(file);

          }
          resolve();
        });
      } else if (item.isDirectory) {
        const dirReader = item.createReader();
        dirReader.readEntries((entries: any[]) => {
          const subPromises = entries.map((entry: any) => this.traverseFileTree(entry));
          Promise.all(subPromises).then(() => resolve());
        });
      }
    });
  }

  removeImage(index: number) {
    this.imagePreviews.splice(index, 1);
    this.imageFiles.splice(index, 1);
  }

  openFolder() {
    if(this.imagePreviews.length === 0){
      const fileInput = document.getElementById('fileInput') as HTMLInputElement;
      fileInput.click();
    }
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.handleFiles(input.files);
    }
  }

  handleFiles(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type.startsWith('image/')) {
        this.imageFiles.push(file);
      }
    }
    this.sortAndUploadImages();
  }

  sortAndUploadImages() {
    this.imageFiles.sort((a, b) => {
      const aName = this.extractNumberFromName(a.name);
      const bName = this.extractNumberFromName(b.name);
      return aName - bName;
    });
    this.imagesSelected.emit(this.imageFiles);
    this.uploadImages()
  }

  extractNumberFromName(name: string): number {
    const match = name.match(/(\d+)/);
    return match ? parseInt(match[0], 10) : 0;
  }

  uploadImages(): void {
    this.createMessageloading();
    const formData = new FormData();
    this.imageFiles.forEach(file => {
      formData.append('files', file, file.name);
    });

    this.uploadService.uploadImages(formData).subscribe(
      response => {
        const newImageUrls: string[] = response.data.map(item => item.url);
        this.imageUrls.push(...newImageUrls);

        this.updateImagePreviews(newImageUrls);

        this.imagesSelected.emit(this.imageFiles);
        this.imagesUrl.emit(this.imageUrls);
        this.createMessage('success')

      },
      error => {
        this.createMessage('error')
      }
    );
  }

  updateImagePreviews(urls: string[]): void {
    // Cập nhật danh sách bản xem trước dựa trên URL từ server
    if (urls.length > 0) {
      urls.forEach((url, index) => {
        this.imagePreviews.push({
          name: this.imgData.length > index ? this.imageFiles[index]?.name : `Image ${index + 1}`,
          url: url
        });
      });
    }
  }
  
  createMessageloading(): void {
    this.messageId = this.message.loading('Action in progress..', { nzDuration: 0 }).messageId;
  }

  createMessage(type: string): void {
    if (this.messageId) {
      this.message.remove(this.messageId);
    }
    this.message.create(type, `chapter added ${type}`);
    this.imageFiles = []
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
