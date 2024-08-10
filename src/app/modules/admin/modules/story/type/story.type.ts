import { IChapter } from "@app/shared/components/open-form/types/chapter.type";
import { IGenre } from "@app/shared/components/open-form/types/genre.type";

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

  export type statusType = 'Updating' | 'Halt' | 'Full';
