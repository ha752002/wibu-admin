import { EFilterOperation } from "@app/core/enums/operation.enums";
import { EPageSizeOptions, ESortByOptions, ESortTypeOptions } from "@app/core/enums/options.enums";

export type SortType = 'ascending' | 'descending' | 'alphabetical' | 'date' | 'popularity';
export type SortBy = 'name' | 'date' | 'rating' | 'popularity';

export interface IInstallation {
    pageSize?: EPageSizeOptions;
    sortType?: ESortTypeOptions;
    sortBy?: ESortByOptions;
  }