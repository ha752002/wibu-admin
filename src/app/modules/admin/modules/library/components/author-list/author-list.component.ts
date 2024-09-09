import { Component, OnDestroy, OnInit } from '@angular/core';
import { IAuthor } from '@app/shared/components/open-form/types/author.type';
import { Router } from '@angular/router';
import { AuthorService } from '@app/shared/services/author/author.service';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { EventService } from '@app/modules/admin/services/event/event.service';
import { IAuthorParams } from '../../types/author-filter.type';
import { Imeta } from '@app/modules/admin/types/meta.type';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrl: './author-list.component.scss'
})
export class AuthorListComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription = new Subscription();
  private eventSubscription!: Subscription;

  searchQuery: string = '';
  // defaultavatarUrl: string = 'assets/img/eyes.png';
  authors: IAuthor[] = [];
  meta?: Imeta;
  ConfigurationParams: IAuthorParams = {
    pageNumber: 1,
    pageSize: 2,
    filterRules: '',
    sortType: '',
    sortBy: ''
  }


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
      this.authorService.getAllAuthors(this.ConfigurationParams).pipe(
        finalize(() => {
        })
      ).subscribe(
        response => {
          this.authors = response.data;
          this.meta = response.meta;
        },

        error => {
          console.error('Error loading Authors', error);

        }
      )
    );

  }

  onPageChange(page: number): void {
    this.ConfigurationParams.pageNumber = page;
    this.getAllAuthors()
  }

  navigateToUserDetail(userId: string): void {
    this.router.navigate(['/admin/user-detail', userId]);
  }

  onFieldValueChange(field: keyof string, value: string | number | Date | undefined): void {
  }

  ngOnDestroy() {
    if (this.eventSubscription) {
      this.eventSubscription.unsubscribe();
    }
  }
}
