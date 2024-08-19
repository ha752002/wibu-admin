
export interface IAuthor {
  id?: string;
  name: string;
  avatarUrl?: string;
  description: string;
}

export interface IAuthors {
  data: IAuthor[];
  message: string,
  status?: boolean,
}