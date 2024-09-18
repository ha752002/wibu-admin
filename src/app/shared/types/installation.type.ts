import { viewType } from "../components/story-list/story-list.component";

export type SortType = 'ascending' | 'descending' | 'alphabetical' | 'date' | 'popularity';
export type SortBy = 'name' | 'date' | 'rating' | 'popularity';

export interface IInstallation {
    pageNumber?: number;
    pageSize?: number;
    sortType?: SortType;
    sortBy?: SortBy;
  }