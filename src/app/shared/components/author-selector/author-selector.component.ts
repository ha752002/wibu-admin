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
import { IFilter, Imeta } from '@app/modules/admin/types/meta.type';
import { EFilterOperation } from '@app/core/enums/operation.enums';
import { IQueryParams } from '@app/modules/admin/types/query-params.type';
import { ConfigurationService } from '@app/modules/admin/services/configuration-params/configuration.service';

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
  meta?: Imeta;
  configurationParams: IQueryParams = {}

  itemFilter: IFilter = {
    value: '',
    operation: EFilterOperation.MATCH,
    target: ''
  };
  constructor(
    private authorService: AuthorService,
    private configService: ConfigurationService
  ) { }

  ngOnInit(): void {
    this.getAllAuthors()
    this.configurationParams = this.configService.getDefaultParamsConfiguration();

    if (this.inAuthorsSelected) {
      this.selectedAuthors = this.inAuthorsSelected
    }
  }

  getAllAuthors(): void {
    this.subscriptions.add(
      this.authorService.getAllAuthors(this.configurationParams).pipe(
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

  identify(index: number, item: any): any {
    return item.id;
  }

  toggleauthor(author: IAuthor) {
    const index = this.selectedAuthors.findIndex(a => a.id === author.id);
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

  clean() {
    this.selectedAuthors = []
    this.outAuthorsSelected.emit(this.selectedAuthors);
  }

  onPageChange(page: number): void {
    this.configurationParams.pageNumber = page;
    this.getAllAuthors();
  }



  onFieldValueChange(field: string, value: string | number | Date | undefined): void {
    this.itemFilter.target = field
    this.onfiltersChange()
  }

  onfiltersChange(): void {
    const encodedData = encodeURIComponent(JSON.stringify(this.itemFilter))
    this.configurationParams.filterRules = encodedData
    this.getAllAuthors()
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
