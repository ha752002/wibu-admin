import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { GenreSelectorComponent } from '@app/shared/components/genre-selector/genre-selector.component';
import { InputFieldComponent } from '@app/shared/components/input-field/input-field.component';
import { OpenModalComponent } from '@app/shared/components/open-modal/open-modal.component';
import { Istyle, UploadImgComponent } from '@app/shared/components/upload-img/upload-img.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzUploadFile, NzUploadModule } from 'ng-zorro-antd/upload';
import { IGenre } from '../../types/genre.type';
import { ICreateStory } from '../../types/story.type';



@Component({
  standalone: true,
  imports: [
    CommonModule,
    NzUploadModule,
    UploadImgComponent,
    InputFieldComponent,
    NzButtonModule,
    OpenModalComponent,
    GenreSelectorComponent
  ],
  selector: 'app-add-story-form',
  templateUrl: './add-story-form.component.html',
  styleUrl: './add-story-form.component.scss'
})
export class AddStoryFormComponent implements OnInit{
  @Input() genre: IGenre[] = [];

  story: ICreateStory = {
    thumbnail: 'https://i.pinimg.com/564x/db/2e/9b/db2e9b90318548e2cde3edd6b908c6f0.jpg',
    genre:[]
  };
  status: string[] = ['Updating','Halt','Full'];
  // selectedGenres: IGenre[] = [];
  previewVisible = false;

  ngOnInit(): void {
    this.story.genre = this.genre
  }

  receiveThumbnail(thumbnailUrl: NzUploadFile[]): void {
    if (thumbnailUrl.length === 1) {
      this.story.thumbnail = thumbnailUrl[0].url;
    } else {
      console.log('err');
    }
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    console.log('Form submitted:', this.story);
  }

  onFieldValueChange(field: keyof ICreateStory, value: string | number | Date | undefined): void {
    console.log(this.story);
  }

  handleVisible(value: boolean) {
    this.previewVisible = value;
  }

  onGenresSelected(genres: IGenre[]) {
    this.story.genre = genres;
  }
}
