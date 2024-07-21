import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzImageModule } from 'ng-zorro-antd/image';
import { OpenModalComponent } from '../open-modal/open-modal.component';

@Component({
  selector: 'app-img',
  standalone: true,
  imports: [
    CommonModule,
    NzImageModule,
    OpenModalComponent
  ],
  templateUrl: './img.component.html',
  styleUrl: './img.component.scss'
})
export class ImgComponent {
  @Input() imgType: 'square' | 'portrait' | 'landscape' = 'square';
  @Input() size: 'small' | 'medium' | 'large' | 'full-screen' = 'medium';
  @Input() padding: boolean = false;
  @Input() shadow: boolean = false;
  @Input() name?: string;
  @Input() url?: string = 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg';

  fallback = '';

  previewVisible = false;
  selectImg(): void {
    this.previewVisible = !this.previewVisible;
    console.log(this.previewVisible);
  }

  handleVisible(value: boolean) {
    this.previewVisible = value;
  }
}
