import { EFilterOperation } from "@app/core/enums/operation.enums";

export interface IStoryFilter {
  target?: string;
  value: string;
  operation?: EFilterOperation;
}

export interface IStoryParams {
  sortBy?: string;
  sortType: string;
  pageNumber?: number;
  pageSize: number;
  filterRules: string;
}
  