import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPage, IResponseImage } from '@app/shared/types/image.types';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzUploadFile, NzUploadModule } from 'ng-zorro-antd/upload';
import { Observable, Observer } from 'rxjs';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    NzModalModule,
    NzUploadModule,
    NzIconModule,
    NzButtonModule],
  selector: 'app-upload-avatar',
  templateUrl: './upload-avatar.component.html',
  styleUrl: './upload-avatar.component.scss'
})
export class UploadAvatarComponent implements OnInit {
  @Output() avatarUrlChange = new EventEmitter<IResponseImage>();

  @Input() size?: 'size-s' | 'size-m' | 'size-l';
  @Input() img?: string;

  loading = false;
  avatarUrl: IResponseImage = {
    data: { url: '' },
  }
  uploadUrl = 'http://localhost:8763/gallery/upload';

  constructor(private msg: NzMessageService) { }

  ngOnInit(): void {
    if (this.img) {
      this.avatarUrl.data.url = this.img;
    }
  }

  beforeUpload = (file: NzUploadFile, _fileList: NzUploadFile[]): Observable<boolean> =>
    new Observable((observer: Observer<boolean>) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        this.msg.error('You can only upload JPG file!');
        observer.complete();
        return;
      }
      const isLt2M = file.size! / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.msg.error('Image must smaller than 2MB!');
        observer.complete();
        return;
      }
      observer.next(isJpgOrPng && isLt2M);
      observer.complete();
    });

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  handleChange(info: { file: NzUploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading = true;
        break;
      case 'done':
        const response = info.file.response;
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.loading = false;
        });
        this.avatarUrl = response;
        this.avatarUrlChange.emit(this.avatarUrl);
        break;
      case 'error':
        this.msg.error('Network error');
        this.loading = false;
        break;
    }
  }
}

