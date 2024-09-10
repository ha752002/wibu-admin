import { IAuthor } from "@app/shared/components/open-form/types/author.type";
import { IChapter } from "@app/shared/components/open-form/types/chapter.type";
import { IGenre } from "@app/shared/components/open-form/types/genre.type";

export interface IStoryInformation {
    id: string;
    thumbnailUrl: string;
    title: string;
    genres: IGenre[],
    authors: IAuthor[];
    views: number;
    chapter?: number;
    chapters?: IChapter[];
    description?: string;
    status?: statusType;
    createdDate?: Date;
    updateDate?: Date;
  }

  export type statusType = 'Updating' | 'Halt' | 'Full';