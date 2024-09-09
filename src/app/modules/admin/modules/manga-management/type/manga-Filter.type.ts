import { EFilterOperation } from "@app/core/enums/operation.enums";

export interface IStoryFilter {
  target?: string;
  value?: string;
  operation?: EFilterOperation;
}

export interface IValueFilter {
  genre?: string;
  status?: string;
  title?: string;
}

export interface IStoryParams {
  sortBy?: string;
  sortType: string;
  pageNumber?: number;
  pageSize: number;
  filterRules: string;
}
  