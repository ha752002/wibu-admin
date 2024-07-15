import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzUploadFile } from 'ng-zorro-antd/upload';


const getBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

export interface Istyle {
  width?: string; 
  height?: string;
}

@Component({
  standalone: true,
  imports: [
    CommonModule,
    NzModalModule,
    NzUploadModule,
    NzIconModule,
    NzButtonModule],
  selector: 'app-upload-img',
  templateUrl: './upload-img.component.html',
  styleUrl: './upload-img.component.scss'
})
export class UploadImgComponent {
  @Output() thumbnailChange = new EventEmitter<NzUploadFile[]>();
  @Input() thumbnail: string = '';
  @Input() length: number = 99;
  @Input() style?: Istyle ;

  fileList: NzUploadFile[] = [];

  previewImage: string | undefined = '';
  previewVisible = false;

  handlePreview = async (file: NzUploadFile): Promise<void> => {
    if (!file.url && !file['preview']) {
      file['preview'] = await getBase64(file.originFileObj!);
    }

    file['preview'] = await getBase64(file.originFileObj!);
    this.previewImage = file.url || file['preview'];

    this.previewVisible = true;
  };

  getUploadAction(): string {
    return 'https://www.mocky.io/v2/5cc8019d300000980a055e76';
  }

  handleChange(info: { file: NzUploadFile }): void {
    // if (info.file.status === 'done') {
    // console.log(this.previewImage);
    this.thumbnailChange.emit(this.fileList);

    // }
  }

}
