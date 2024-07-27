import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],

  selector: 'app-item-information',
  templateUrl: './item-information.component.html',
  styleUrl: './item-information.component.scss'
})
export class ItemInformationComponent {
  @Input() title?: string;
  @Input() content?: string;
}
