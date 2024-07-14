import { Component, Input, OnInit } from '@angular/core';
import { IStoryInformation } from '../../manga-management.component';

export type viewType = 'grid' | 'table' ;

@Component({
  selector: 'app-manga-list',
  templateUrl: './manga-list.component.html',
  styleUrl: './manga-list.component.scss'
})
export class MangaListComponent implements OnInit{
  @Input() storyData: IStoryInformation[] = [];
  @Input() viewType?: viewType = 'table';

  ngOnInit(){
    console.log(this.storyData);
    
  }
  
}
