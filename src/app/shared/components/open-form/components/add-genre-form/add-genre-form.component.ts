import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGenre } from '@app/modules/admin/modules/story/story.component';
import { InputFieldComponent } from '@app/shared/components/input-field/input-field.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

@Component({
  selector: 'app-add-genre-form',
  standalone: true,
  imports: [
    CommonModule,
    InputFieldComponent,
    NzButtonModule,
    NzCheckboxModule, 
    FormsModule ,
  ],
  templateUrl: './add-genre-form.component.html',
  styleUrl: './add-genre-form.component.scss'
})
export class AddGenreFormComponent {
  genre: IGenre = {
    genre: '',
    describe: '',
    AgeWarning: false,
  };

  onSubmit(event: Event): void {
    event.preventDefault();
    console.log('Form submitted:', this.genre);
  }

  onFieldValueChange(field: keyof IGenre, value: string | number | Date | undefined): void {
    console.log(this.genre);
  }
}
