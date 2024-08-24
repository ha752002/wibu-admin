
export interface IAuthor {
  id: string;
  name: string;
  avatarUrl?: string;
  description: string;
}

export interface IAuthors {
  data: IAuthor[];
  message: string;
  status?: boolean;
}

export interface IResponseAuthor {
  data: ISimpleAuthor;
  message: string;
  status?: boolean;
}

export interface ISimpleAuthor{
  name: string;
  avatarUrl?: string;
  description: string;
}