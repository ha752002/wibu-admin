export interface IChapter{
        id?: string;
        mangaId?: string;
        title?: string,
        pages?: string[],
}

export interface IResponseChapter{
    data: IChapter;
    message: string;
    status?: boolean;
}