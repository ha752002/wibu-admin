export interface IChapterContent {
    id: string;
    mangaId: string;
    title: string,
    views: Number,
    createdDate: string,
    pages: Ipages[],
}

export interface Ipages {
    id: string;
    imageUrl: string;
    createdDate: string,
}

export interface IResponseChapter {
    data: IChapterContent;
    message: string;
    status?: boolean;
}