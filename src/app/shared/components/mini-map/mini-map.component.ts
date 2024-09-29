import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { NzButtonModule} from 'ng-zorro-antd/button';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    NzButtonModule,
  ],selector: 'app-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.scss'
})
export class MiniMapComponent implements OnInit , AfterViewInit {
  @Input() contentElement!: HTMLElement; // Tham chiếu đến phần tử nội dung có cuộn
  public scaledContentHeight: number = 0;
  public highlightStyle: any = {};

  private contentHeight: number = 0;
  private viewHeight: number = 0;
  private scaleFactor: number = 0.1; // Tỷ lệ thu nhỏ

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.calculateContentHeight();
    this.updateHighlight(); // Cập nhật highlight lần đầu
  }

  ngAfterViewInit(): void {
    this.copyContentToMiniMap();
  }

  private calculateContentHeight(): void {
    if (this.contentElement) {
      this.contentHeight = this.contentElement.scrollHeight; // Chiều cao toàn bộ nội dung có cuộn
      this.viewHeight = this.contentElement.clientHeight; // Chiều cao của phần tử nội dung hiển thị

      // Tính toán chiều cao thu nhỏ cho mini map
      this.scaledContentHeight = this.contentHeight * this.scaleFactor;
    }
  }

  private copyContentToMiniMap(): void {
    const miniMapCopy = this.el.nativeElement.querySelector('.mini-map-copy');
    const mainContent = this.contentElement.querySelector('#main-content'); // Lấy phần tử chính

    if (miniMapCopy && mainContent) {
      const clonedContent = mainContent.cloneNode(true); // Chỉ sao chép nội dung của phần tử chính
      this.renderer.appendChild(miniMapCopy, clonedContent);
    }
  }

  // Lắng nghe sự kiện cuộn từ phần tử nội dung
  @HostListener('scroll', ['$event']) 
  onScroll(event: Event) {
    this.updateHighlight();
  }

  private updateHighlight(): void {
    if (this.contentElement) {
      const scrollPosition = this.contentElement.scrollTop; // Vị trí cuộn hiện tại
      const highlightTop = scrollPosition * this.scaleFactor; // Tính toán vị trí của highlight
      const highlightHeight = this.viewHeight * this.scaleFactor; // Tính toán chiều cao của highlight

      // Cập nhật vị trí và kích thước của highlight
      this.highlightStyle = {
        top: highlightTop + 'px',
        height: highlightHeight + 'px'
      };
    }
  }
}
