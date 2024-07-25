import { Component } from '@angular/core';

type contentType = 'genre' | 'author';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss'
})
export class LibraryComponent {
  contentLibrary: contentType = 'genre';

  contents: contentType[] = ['genre' , 'author']

  changeContent(titleContent: contentType) {
    this.contentLibrary = titleContent
  }
}
