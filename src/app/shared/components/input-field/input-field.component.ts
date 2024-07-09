import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputFieldTypes } from './input-field.types';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { IconComponent } from '../icon/icon.component';

@Component({
  standalone: true,
  imports: [CommonModule, NzInputModule, FormsModule, NzSkeletonModule ,IconComponent],
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss'
})
export class InputFieldComponent {
  @Input() label: string = 'plus';
  @Input() type: InputFieldTypes = 'text';
  @Input() value: string | number | Date | undefined;
  @Input() required: boolean = false;
  @Output() valueChange = new EventEmitter<string | number | Date | undefined>();

  passwordVisible = false;

  onValueChange(event: Event): void {
    const input = (event.target as HTMLInputElement)?.value;
    if (input !== undefined) {
      this.value = input;
      this.valueChange.emit(this.value);
    }
  }


}
