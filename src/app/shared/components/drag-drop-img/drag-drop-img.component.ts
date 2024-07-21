import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImgComponent } from '../img/img.component';
import { IconComponent } from '../icon/icon.component';

export interface IImagePreview {
  name?: string;
  url?: string
}

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
export class DragDropImgComponent {
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  @Output() imagesSelected = new EventEmitter<File[]>();

  imageFiles: File[] = [];
  imagePreviews: IImagePreview[] = [];

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
      this.sortAndPreviewImages();
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
    this.sortAndPreviewImages();
  }

  openFolder() {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput.click();
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
    this.sortAndPreviewImages();
  }

  sortAndPreviewImages() {
    this.imageFiles.sort((a, b) => {
      const aName = this.extractNumberFromName(a.name);
      const bName = this.extractNumberFromName(b.name);
      return aName - bName;
    });
    this.updateImagePreviews();
    this.imagesSelected.emit(this.imageFiles);
  }

  extractNumberFromName(name: string): number {
    const match = name.match(/(\d+)/);
    return match ? parseInt(match[0], 10) : 0;
  }

  updateImagePreviews() {
    this.imagePreviews = this.imageFiles.map(file => ({
      name: file.name,
      url: URL.createObjectURL(file)
    }));
  }

  uploadImages() {
    this.imagesSelected.emit(this.imageFiles);

    this.imageFiles.forEach(file => {
      console.log(file.name);
    });
  }
}
