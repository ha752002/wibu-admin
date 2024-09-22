import { IStoryInformation } from "@app/modules/admin/modules/story/type/story.type";
import { IGenre } from "./genre.type";
import { IAuthor } from "./author.type";
import { IChapter } from "./chapter.type";

export interface ICreateStory {
  thumbnailUrl?: string;
  title?: string;
  authorIds: string[];
  genreIds: string[];
  chapters?: IChapter[];
  genres?: IGenre[];
  authors?: IAuthor[];
  description?: string;
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
