import { Component } from '@angular/core';

type contentType = 'Genre' | 'Author';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss'
})
export class LibraryComponent {
  contentLibrary: contentType = 'Genre';

  contents: contentType[] = ['Genre' , 'Author']

  changeContent(titleContent: contentType) {
    this.contentLibrary = titleContent
  }
}
