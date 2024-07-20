import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImgComponent } from '../img/img.component';
import { IconComponent } from '../icon/icon.component';

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
  imagePreviews: string[] = [];

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const element = event.target as HTMLElement;
    element.classList.add('drag-over');
    console.log('add');
    
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const element = event.target as HTMLElement;
    element.classList.remove('drag-over');
    console.log('remove');

  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const element = event.target as HTMLElement;
    element.classList.remove('drag-over');
    console.log('remove');


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
      this.updateImagePreviews();
      this.imagesSelected.emit(this.imageFiles);
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
    this.imagesSelected.emit(this.imageFiles);
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
    this.updateImagePreviews();
    this.imagesSelected.emit(this.imageFiles);
  }

  updateImagePreviews() {
    this.imagePreviews = this.imageFiles.map(file => URL.createObjectURL(file));
  }

  uploadImages() {
    this.imagesSelected.emit(this.imageFiles);

    this.imageFiles.forEach(file => {
      // this.uploadService.uploadImage(file).subscribe(response => {
      //   console.log('Upload successful', response);
      // }, error => {
      //   console.error('Upload failed', error);
      // });
      console.log(file.name);

    });
  }
}
