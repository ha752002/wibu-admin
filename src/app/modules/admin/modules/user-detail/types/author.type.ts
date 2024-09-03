export interface IAuthor {
    id: string;
    name: string;
    avatarUrl?: string;
    description: string;
    createdDate: Date,
    lastUpdated: Date,
  
  }
  
  export interface IResponseAuthor {
    data: IAuthor;
    message: string;
    status?: boolean;
  }