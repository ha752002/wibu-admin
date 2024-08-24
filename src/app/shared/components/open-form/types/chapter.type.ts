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
    data: IChapter;
    message: string;
    status?: boolean;
  }

  export interface ISimpleChapter{
    mangaId? : string;
    title?: string;
    pages?: string[];
  }