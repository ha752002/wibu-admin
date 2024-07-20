import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzImageModule } from 'ng-zorro-antd/image';

@Component({
  selector: 'app-img',
  standalone: true,
  imports: [
    CommonModule,
    NzImageModule
  ],
  templateUrl: './img.component.html',
  styleUrl: './img.component.scss'
})
export class ImgComponent {
  @Input() imgType: 'square' | 'portrait' | 'landscape' = 'square';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() padding: boolean = false;
  @Input() shadow: boolean = false;
  @Input() url: string = 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg';

  fallback = '';

}
