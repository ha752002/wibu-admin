import { Injectable } from '@angular/core';
import { IQueryParams } from '../../types/query-params.type';
import { ESortByOptions, ESortTypeOptions } from '@app/core/enums/options.enums';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  private configurationParams: IQueryParams = {
    pageNumber: 1,
    pageSize: 16,
    filterRules: '',
    sortType: ESortTypeOptions.ASC,
    sortBy: ESortByOptions.CreatedDate
  };

  getConfigurationParams(): IQueryParams {
    return this.configurationParams;
  }

  setConfigurationParams(newParams: Partial<IQueryParams>): void {
    this.configurationParams = { ...this.configurationParams, ...newParams };
  }
}
