export interface IImage {
    name?: string;
    url?: string
  }

  export interface IResponseImage {
    data: string[];
    message: string;
    status?: boolean;
  }