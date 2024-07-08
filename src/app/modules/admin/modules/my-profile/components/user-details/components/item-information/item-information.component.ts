import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-information',
  templateUrl: './item-information.component.html',
  styleUrl: './item-information.component.scss'
})
export class ItemInformationComponent {
  @Input() title?: string;
  @Input() content?: string;
}
