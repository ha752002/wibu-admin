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
  dataAuthors: IAuthor[] = [
    {
      id: '1',
      name: 'John Doe',
      avatarUrl: 'https://i.pinimg.com/736x/8d/12/49/8d1249009c78480d4f773714179f8d8f.jpg',
      description: 'John Doe is a prolific writer known for his thrilling novels and captivating storytelling.'
    },
    {
      id: '2',
      name: 'Jane Smith',
      description: 'Jane Smith specializes in historical fiction and has won numerous awards for her works.'
    },
    {
      id: '3',
      name: 'Alice Johnson',
      avatarUrl: 'https://i.pinimg.com/736x/85/96/2b/85962b3340e2dc2b9c21389bb0bd3e00.jpg',
      description: 'Alice Johnson writes science fiction and fantasy, creating intricate worlds and engaging characters.'
    },
    {
      id: '4',
      name: 'Bob Brown',
      avatarUrl: 'https://i.pinimg.com/736x/8d/12/49/8d1249009c78480d4f773714179f8d8f.jpg',
      description: 'Bob Brown is an acclaimed author of mystery and detective novels, keeping readers on the edge of their seats.'
    },
    {
      id: '5',
      name: 'John Doe',
      avatarUrl: 'https://i.pinimg.com/736x/8d/12/49/8d1249009c78480d4f773714179f8d8f.jpg',
      description: 'John Doe is a prolific writer known for his thrilling novels and captivating storytelling.'
    },
    {
      id: '6',
      name: 'Jane Smith',
      description: 'Jane Smith specializes in historical fiction and has won numerous awards for her works.'
    },
    {
      id: '7',
      name: 'Alice Johnson',
      avatarUrl: 'https://i.pinimg.com/736x/85/96/2b/85962b3340e2dc2b9c21389bb0bd3e00.jpg',
      description: 'Alice Johnson writes science fiction and fantasy, creating intricate worlds and engaging characters.'
    },
    {
      id: '8',
      name: 'Bob Brown',
      avatarUrl: 'https://i.pinimg.com/736x/8d/12/49/8d1249009c78480d4f773714179f8d8f.jpg',
      description: 'Bob Brown is an acclaimed author of mystery and detective novels, keeping readers on the edge of their seats.'
    },
    {
      id: '9',
      name: 'Alice Johnson',
      avatarUrl: 'https://i.pinimg.com/736x/85/96/2b/85962b3340e2dc2b9c21389bb0bd3e00.jpg',
      description: 'Alice Johnson writes science fiction and fantasy, creating intricate worlds and engaging characters.'
    },
    {
      id: '10',
      name: 'Bob Brown',
      avatarUrl: 'https://i.pinimg.com/736x/8d/12/49/8d1249009c78480d4f773714179f8d8f.jpg',
      description: 'Bob Brown is an acclaimed author of mystery and detective novels, keeping readers on the edge of their seats.'
    }
  ];
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
