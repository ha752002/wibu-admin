import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    NzButtonModule
  ],
  selector: 'app-delete-form',
  templateUrl: './delete-form.component.html',
  styleUrl: './delete-form.component.scss'
})
export class DeleteFormComponent {
  @Input() id?: number;
  @Input() delete: 'user' | 'story' | 'chapter' | 'author' | 'genre' = 'user';


  onDelete(): void {
    if (this.id) {
      console.log('deleted ' + this.delete + ' with id: ' + this.id);
      return;
    }
  }
}
