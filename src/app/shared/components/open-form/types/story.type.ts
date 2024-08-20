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

export type statusType = 'Updating' | 'Halt' | 'Full';
