import { Component, OnDestroy, OnInit } from '@angular/core';
import { IAuthor } from '@app/shared/components/open-form/types/author.type';
import { Router } from '@angular/router';
import { AuthorService } from '@app/shared/services/author/author.service';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { EventService } from '@app/modules/admin/services/event/event.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrl: './author-list.component.scss'
})
export class AuthorListComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription = new Subscription();
  private eventSubscription!: Subscription;

  searchQuery: string = '';
  defaultavatarUrl: string = 'assets/img/eyes.png';
  authors: IAuthor[] = [];
  paginatedData: IAuthor[] = [];
  pageSize = 12;
  currentPage = 1;

  constructor(
    private router: Router,
    private eventService: EventService,
    private authorService: AuthorService
  ) { }

  ngOnInit(): void {
    this.eventSubscription = this.eventService.event$.subscribe(() => {
      this.getAllAuthors();
    });
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

  ngOnDestroy() {
    if (this.eventSubscription) {
      this.eventSubscription.unsubscribe();
    }
  }
}
