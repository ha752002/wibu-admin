import { Component, Input } from '@angular/core';
import { IStoryInformation } from '../../../../manga-management.component';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrl: './list-table.component.scss'
})
export class ListTableComponent {
  @Input() storyData?: IStoryInformation[] = [];

}
