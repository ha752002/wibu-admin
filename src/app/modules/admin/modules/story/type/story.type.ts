import { EFilterOperation } from "@app/core/enums/operation.enums";
import { IAuthor } from "@app/shared/components/open-form/types/author.type";
import { IChapter } from "@app/shared/components/open-form/types/chapter.type";
import { IGenre } from "@app/shared/components/open-form/types/genre.type";

export interface IStoryInformation {
  id?: string;
  thumbnailUrl?: string;
  title?: string;
  genres?: IGenre[];
  authors?: IAuthor[];
  publisher?:IPublisher;
  views?: number;
  chapter?: number;
  chapters?: IChapter[];
  description?: string;
  status?: statusType;
  createdDate?: Date;
  update?: Date;
}

export interface Imeta{
  pageNumber: number;
  pageSize: number;
  numberOfRecords: number;
}

export interface IStorys{
  data: IStoryInformation[];
  meta:Imeta;
  message: string;
  status?: boolean;
}

export interface IStory{
  data: IStoryInformation;
  message: string;
  status?: boolean;
}

export interface IPublisher{
  avatarUrl?: string;
  createdDate: Date;
  email?: string;
  id: string;
  username: string;
}



  export type statusType = 'Updating' | 'Halt' | 'Full';
