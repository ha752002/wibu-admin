import { Component } from '@angular/core';
import { ELibrary } from '@app/core/enums/library.enums';


@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss'
})
export class LibraryComponent {
  ELibrary = ELibrary;
  contentLibrary: ELibrary = ELibrary.Genre;
  contents: ELibrary[] = [ELibrary.Genre, ELibrary.Author];

  changeContent(titleContent: ELibrary) {
    this.contentLibrary = titleContent
  }
}
