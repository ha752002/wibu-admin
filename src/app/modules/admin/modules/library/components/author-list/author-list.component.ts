import { Component } from '@angular/core';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrl: './author-list.component.scss'
})
export class AuthorListComponent {
  searchQuery: string = '';

  onFieldValueChange(field: keyof string, value: string | number | Date | undefined): void {
    console.log(this.searchQuery);
  }
}
