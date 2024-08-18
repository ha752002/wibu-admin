import { Component, OnInit } from '@angular/core';
import { IAuthor } from '@app/shared/components/open-form/types/author.type';
import { Router } from '@angular/router';
import { AuthorService } from '@app/shared/services/author/author.service';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrl: './author-list.component.scss'
})
export class AuthorListComponent implements OnInit{
  private subscriptions: Subscription = new Subscription();

  searchQuery: string = '';
  defaultAvatar: string = 'assets/img/eyes.png';
  authors: IAuthor[] = [];
  paginatedData: IAuthor[] = [];
  pageSize = 12;
  currentPage = 1;
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
  
  constructor(
    private router: Router,
    private authorService: AuthorService
  ) { }

  ngOnInit(): void {
    this.getAllAuthors()
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
}
