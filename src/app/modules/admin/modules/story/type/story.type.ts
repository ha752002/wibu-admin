import { IAuthor } from "@app/shared/components/open-form/types/author.type";
import { IChapter } from "@app/shared/components/open-form/types/chapter.type";
import { IGenre } from "@app/shared/components/open-form/types/genre.type";

export interface IStoryInformation {
  id?: string;
  thumbnailUrl?: string;
  title?: string;
  genres?: IGenre[],
  author?: IAuthor[];
  views?: number;
  chapter?: number;
  chapters?: IChapter[];
  introduce?: string;
  status?: statusType;
  created?: Date;
  update?: Date;
}

export interface IStorys{
  data: IStoryInformation[];
  message: string,
  status?: boolean,
}

export interface IStory{
  data: IStoryInformation;
  message: string,
  status?: boolean,
}


  export type statusType = 'Updating' | 'Halt' | 'Full';
