import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAuthor } from '../open-form/types/author.type';
import { finalize, Subscription } from 'rxjs';
import { AuthorService } from '../../services/author/author.service';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { InputFieldComponent } from '../input-field/input-field.component';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    NzAvatarModule,
    InputFieldComponent,
    NzPaginationModule
  ],
  selector: 'app-author-selector',
  templateUrl: './author-selector.component.html',
  styleUrl: './author-selector.component.scss'
})
export class AuthorSelectorComponent {
  @Output() outAuthorsSelected = new EventEmitter<IAuthor>();
  @Input() inAuthorsSelected?: IAuthor;
  private subscriptions: Subscription = new Subscription();

  searchQuery: string = '';
  authors: IAuthor[] = []
  dataAuthors: IAuthor[] = [
    {
      id: 1,
      name: 'John Doe',
      avatar: 'https://i.pinimg.com/736x/8d/12/49/8d1249009c78480d4f773714179f8d8f.jpg',
      describe: 'John Doe is a prolific writer known for his thrilling novels and captivating storytelling.'
    },
    {
      id: 2,
      name: 'Jane Smith',
      describe: 'Jane Smith specializes in historical fiction and has won numerous awards for her works.'
    },
    {
      id: 3,
      name: 'Alice Johnson',
      avatar: 'https://i.pinimg.com/736x/85/96/2b/85962b3340e2dc2b9c21389bb0bd3e00.jpg',
      describe: 'Alice Johnson writes science fiction and fantasy, creating intricate worlds and engaging characters.'
    },
    {
      id: 4,
      name: 'Bob Brown',
      avatar: 'https://i.pinimg.com/736x/8d/12/49/8d1249009c78480d4f773714179f8d8f.jpg',
      describe: 'Bob Brown is an acclaimed author of mystery and detective novels, keeping readers on the edge of their seats.'
    },
    {
      id: 5,
      name: 'John Doe',
      avatar: 'https://i.pinimg.com/736x/8d/12/49/8d1249009c78480d4f773714179f8d8f.jpg',
      describe: 'John Doe is a prolific writer known for his thrilling novels and captivating storytelling.'
    },
    {
      id: 6,
      name: 'Jane Smith',
      describe: 'Jane Smith specializes in historical fiction and has won numerous awards for her works.'
    },
    {
      id: 7,
      name: 'Alice Johnson',
      avatar: 'https://i.pinimg.com/736x/85/96/2b/85962b3340e2dc2b9c21389bb0bd3e00.jpg',
      describe: 'Alice Johnson writes science fiction and fantasy, creating intricate worlds and engaging characters.'
    },
    {
      id: 8,
      name: 'Bob Brown',
      avatar: 'https://i.pinimg.com/736x/8d/12/49/8d1249009c78480d4f773714179f8d8f.jpg',
      describe: 'Bob Brown is an acclaimed author of mystery and detective novels, keeping readers on the edge of their seats.'
    },
    {
      id: 9,
      name: 'Alice Johnson',
      avatar: 'https://i.pinimg.com/736x/85/96/2b/85962b3340e2dc2b9c21389bb0bd3e00.jpg',
      describe: 'Alice Johnson writes science fiction and fantasy, creating intricate worlds and engaging characters.'
    },
    {
      id: 10,
      name: 'Bob Brown',
      avatar: 'https://i.pinimg.com/736x/8d/12/49/8d1249009c78480d4f773714179f8d8f.jpg',
      describe: 'Bob Brown is an acclaimed author of mystery and detective novels, keeping readers on the edge of their seats.'
    }
  ];
  selectedAuthors?: IAuthor;
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
          this.authors = response;
          this.updatePaginatedData()
        },

        error => {
          console.error('Error loading Authors', error);
          this.authors = this.dataAuthors
          this.updatePaginatedData()
        }
      )
    );
  }

  identify(index: number, item: any): any {
    return item.id; 
  }

  toggleauthor(author: IAuthor) {
    const index = this.dataAuthors.findIndex(a => a.name === author.name);
    if (index === -1) {
      this.selectedAuthors = author;
    } else {
      this.selectedAuthors = author;
    }
    this.outAuthorsSelected.emit(this.selectedAuthors);
  }

  isSelected(author: IAuthor): boolean {
    return this.selectedAuthors?.id === author.id;
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

  onFieldValueChange(field: keyof string, value: string | number | Date | undefined): void {
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
