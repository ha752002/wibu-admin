import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAuthor } from '../open-form/types/author.type';
import { finalize, Subscription } from 'rxjs';
import { AuthorService } from '../../services/author/author.service';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { InputFieldComponent } from '../input-field/input-field.component';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { IconComponent } from '../icon/icon.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { OpenFormComponent } from '../open-form/open-form.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    NzAvatarModule,
    InputFieldComponent,
    NzPaginationModule,
    IconComponent,
    NzButtonModule
  ],
  selector: 'app-author-selector',
  templateUrl: './author-selector.component.html',
  styleUrl: './author-selector.component.scss'
})
export class AuthorSelectorComponent {
  @Output() outAuthorsSelected = new EventEmitter<IAuthor[]>();
  @Input() inAuthorsSelected?: IAuthor[];
  private subscriptions: Subscription = new Subscription();

  searchQuery: string = '';
  authors: IAuthor[] = []
  selectedAuthors: IAuthor[] = [];
  paginatedData: IAuthor[] = [];
  pageSize = 8;
  currentPage = 1;
  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
    this.getAllAuthors()

    if (this.inAuthorsSelected) {
      this.selectedAuthors = this.inAuthorsSelected
    }
  }

  getAllAuthors(): void {
    this.subscriptions.add(
      this.authorService.getAllAuthors().pipe(
        finalize(() => {
          console.log('Authors loaded');
        })
      ).subscribe(
        response => {
          this.authors = response.data;
          this.updatePaginatedData()
        },

        error => {
          console.error('Error loading Authors', error);
          this.updatePaginatedData()
        }
      )
    );
  }

  identify(index: number, item: any): any {
    return item.id; 
  }

  toggleauthor(author: IAuthor) {
    const index = this.selectedAuthors.findIndex(a => a.id === author.id);
    console.log(index);
    
    if (index === -1) {
      this.selectedAuthors.push(author);
    } else {
      this.selectedAuthors.splice(index, 1);
    }
    this.outAuthorsSelected.emit(this.selectedAuthors);
  }

  isSelected(author: IAuthor): boolean {
    return this.selectedAuthors.some(g => g.id === author.id);
  }

  updatePaginatedData(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedData = this.authors.slice(startIndex, endIndex);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.updatePaginatedData();
  }

  clean(){
    this.selectedAuthors = []
    this.outAuthorsSelected.emit(this.selectedAuthors);

  }

  onFieldValueChange(field: keyof string, value: string | number | Date | undefined): void {
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
