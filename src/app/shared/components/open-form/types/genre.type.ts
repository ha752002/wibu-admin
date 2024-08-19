export interface IGenre {
  id?: string;
  title: string,
  // AgeWarning?: boolean,
  description?: string,
}

export interface IGenres {
  data: IGenre[];
  message: string,
  status?: boolean,
}