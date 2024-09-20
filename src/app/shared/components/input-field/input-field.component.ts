import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InputFieldTypes } from './input-field.types';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { IconComponent } from '../icon/icon.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { EUserRole } from '@app/core/enums/user.enums';
import { NzRadioModule } from 'ng-zorro-antd/radio';

@Component({
  standalone: true,
  imports: [CommonModule, NzInputModule, FormsModule, NzSkeletonModule, IconComponent, NzSelectModule,NzRadioModule ],
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss'
})
export class InputFieldComponent implements OnInit {
  @Input() label: string = '';
  @Input() type: InputFieldTypes = 'text';
  @Input() value: string | number | Date | EUserRole[] | undefined;
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  @Input() optionValues?: any[];
  @Input() labelValues?: any[];
  @Input() multiple?: boolean;
  @Output() valueChange = new EventEmitter<string | number | Date | undefined>();

  passwordVisible = false;
  
  ngOnInit(): void {
  }

  onValueChange(event: Event): void {
    const input = (event.target as HTMLInputElement)?.value;
    if (input !== undefined) {
      this.value = input;
      this.valueChange.emit(this.value);
    }
  }


}
