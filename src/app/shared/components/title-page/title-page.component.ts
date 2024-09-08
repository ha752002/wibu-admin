import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    NzButtonModule,
  ],
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrl: './title-page.component.scss'
})
export class TitlePageComponent implements OnInit{
  @Input() titlePage?: string | string[];
  @Input() multiTitlePage?: string[];
  @Input() imSelectedTitle?: string;
  @Output() outSelectedTitle = new EventEmitter<string>();

  selectedTitle :string = ''

  ngOnInit(): void {
    if(this.imSelectedTitle){
      this.selectedTitle = this.imSelectedTitle
    }
  }

  changeTitle(titleContent: string) {
    this.selectedTitle = titleContent
    this.outSelectedTitle.emit(titleContent);
  }
}
