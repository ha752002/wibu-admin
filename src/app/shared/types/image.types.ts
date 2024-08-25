export interface IImage {
    name?: string;
    url?: string
  }

  export interface IPage{
    url : string;
  }

  export interface IResponseImages {
    data: IPage[];
    message: string;
    status?: boolean;
  }

  export interface IResponseImage {
    data: IPage;
    message: string;
    status?: boolean;
  }