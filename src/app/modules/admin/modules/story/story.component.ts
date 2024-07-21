import { Component } from '@angular/core';

export interface IStoryInformation {
  id?: number;
  thumbnail?: string;
  name?: string;
  genres?: IGenre[],
  author?: string;
  translator?: string;
  views?: number;
  chapter?: number;
  chapters?: IChapter[];
  introduce?: string;
  status?: statusType;
  created?: Date;
  update?: Date;
}


export interface IGenre {
  id?: number;
  genre?: string,
  AgeWarning?: boolean,
  describe?: string,
}

export interface IChapter {
  id?: number;
  name?: string,
  image?: string[],
}


export type statusType = 'Updating' | 'Halt' | 'Full';


@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrl: './story.component.scss'
})
export class StoryComponent {

}
