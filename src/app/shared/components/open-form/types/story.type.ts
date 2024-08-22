import { IGenre } from "./genre.type";

export interface ICreateStory {
  thumbnailUrl?: string;
  title?: string;
  authorIds: string[];
  genreIds: string[];
  introduce?: string;
  status?: statusType;
  created?: Date;
  update?: Date;
}

export interface IResponseStory {
  data: ICreateStory;
  message: string;
  status?: boolean;
}

export type statusType = 'Updating' | 'Halt' | 'Full';
