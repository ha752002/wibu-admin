import { Component } from '@angular/core';
import { ELibrary } from '@app/core/enums/library.enums';


@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss'
})
export class LibraryComponent {
  ELibrary = ELibrary;
  selectedTitle: string = ELibrary.Genre;
  contents: ELibrary[] = [ELibrary.Genre, ELibrary.Author];

  changeTitle(titleContent: string) {
    this.selectedTitle = titleContent
  }
}
