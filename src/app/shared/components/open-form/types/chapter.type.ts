import { IChapterContent, Ipages } from "@app/modules/admin/modules/chapter/types/chapter.type";

export interface IChapter {
  id?: string;
  mangaId?: string;
  title?: string,
  pages?: string[],
}

export interface IChapters {
  data: IChapter[];
  message: string,
  status?: boolean,
}

export interface IResponseChapter {
  data: IChapterContent;
  message: string;
  status?: boolean;
}

export interface ISimpleChapter {
  mangaId?: string;
  title?: string;
  pages?: string[];
}