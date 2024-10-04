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
  @Input() contentElement!: HTMLElement; 
  public scaledContentHeight: number = 0;
  public highlightStyle: any = {};

  private contentHeight: number = 0;
  private viewHeight: number = 0;
  private scaleFactor: number = 0.1;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.calculateContentHeight();
    this.updateHighlight();
  }

  ngAfterViewInit(): void {
    this.copyContentToMiniMap();
  }

  private calculateContentHeight(): void {
    if (this.contentElement) {
      this.contentHeight = this.contentElement.scrollHeight;
      this.viewHeight = this.contentElement.clientHeight; 
      this.scaledContentHeight = this.contentHeight * this.scaleFactor;
    }
  }

  private copyContentToMiniMap(): void {
    const miniMapCopy = this.el.nativeElement.querySelector('.mini-map-copy');
    const mainContent = this.contentElement.querySelector('#main-content');

    if (miniMapCopy && mainContent) {
      const clonedContent = mainContent.cloneNode(true);
      this.renderer.appendChild(miniMapCopy, clonedContent);
    }
  }

  @HostListener('scroll', ['$event']) 
  onScroll(event: Event) {
    this.updateHighlight();
  }

  private updateHighlight(): void {
    if (this.contentElement) {
      const scrollPosition = this.contentElement.scrollTop;
      const highlightTop = scrollPosition * this.scaleFactor;
      const highlightHeight = this.viewHeight * this.scaleFactor; 

      this.highlightStyle = {
        top: highlightTop + 'px',
        height: highlightHeight + 'px'
      };
    }
  }
}
