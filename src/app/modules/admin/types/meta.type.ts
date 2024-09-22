import { EFilterOperation } from "@app/core/enums/operation.enums";

export interface Imeta {
    pageNumber: number;
    pageSize: number;
    numberOfRecords: number;
}

export interface IFilter {
    target?: string;
    value?: string;
    operation?: EFilterOperation;
}  