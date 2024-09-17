import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { ListGridComponent } from './components/list-grid/list-grid.component';
import { ListTableComponent } from './components/list-table/list-table.component';
import { Imeta } from '@app/modules/admin/types/meta.type';
import { IStoryInformation } from '@app/modules/admin/modules/manga-management/type/manga.type';

export type viewType = 'grid' | 'table';

@Component({
  selector: 'app-story-list',
  standalone: true,
  imports: [
    CommonModule,
    ListGridComponent,
    ListTableComponent,
  ],
  templateUrl: './story-list.component.html',
  styleUrl: './story-list.component.scss'
})
export class StoryListComponent implements OnInit {
  @Input() rowSize: 3 | 4 | 5 = 3;
  @Input() meta?: Imeta;
  @Input() viewType: viewType = 'grid';
  @Input() storyData?: IStoryInformation[] = [];
  @Output() PageChange = new EventEmitter<number>();

  ngOnInit(): void {    
  }

  onPageChange(page: number): void {
    this.PageChange.emit(page);
  }
}
