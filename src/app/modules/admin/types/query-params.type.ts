import { ESortByOptions, ESortTypeOptions } from "@app/core/enums/options.enums";

export interface IQueryParams {
    sortBy?: ESortByOptions;
    sortType?: ESortTypeOptions;
    pageNumber?: number;
    pageSize?: number;
    filterRules?: string;
  }
    