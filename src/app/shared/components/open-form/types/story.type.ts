import { IGenre } from "./genre.type";

export interface ICreateStory {
    thumbnail?: string;
    name?: string;
    author: string;
    translator?: string;
    introduce?: string;
    status?: statusType;
    created?: Date;
    update?: Date;
    genre: IGenre[];
  }
  
  export type statusType = 'Updating' | 'Halt' | 'Full';
  