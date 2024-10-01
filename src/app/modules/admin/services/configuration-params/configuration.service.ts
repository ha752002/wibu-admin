import { Injectable } from '@angular/core';
import { IQueryParams } from '../../types/query-params.type';
import { ESortByOptions, ESortTypeOptions, EViewTypeOptions } from '@app/core/enums/options.enums';
import { EFilterOperation } from '@app/core/enums/operation.enums';
import { IFilter } from '../../types/meta.type';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  private defaultParamsConfiguration: IQueryParams = {
    pageSize: 16,
    filterRules: '',
    sortType: ESortTypeOptions.ASC,
    sortBy: ESortByOptions.CreatedDate
  };

  rowSize: number = 3;
  viewType: EViewTypeOptions = EViewTypeOptions.Grid;
  operation: EFilterOperation = EFilterOperation.MATCH;
  paramsConfiguration: IQueryParams = this.defaultParamsConfiguration;

  loadRowSize(): void {
    this.rowSize = this.getStoredValue('rowSize', Number, this.rowSize);
  }

  loadViewType(): void {
    this.viewType = this.getStoredValue<EViewTypeOptions>('viewType', JSON.parse, this.viewType);
  }

  loadparamsConfiguration(): void {
    this.paramsConfiguration = this.getStoredValue<IQueryParams>('configParams', JSON.parse, this.paramsConfiguration);
  }

  loadOperation(): void {
    this.operation = this.getStoredValue<EFilterOperation>('operation', JSON.parse, this.operation);
  }

  private getStoredValue<T>(key: string, parser: (value: string) => T, defaultValue: T): T {
    const storedValue = localStorage.getItem(key);
    return storedValue ? parser(storedValue) : defaultValue;
  }

  getDefaultParamsConfiguration(): IQueryParams {
    return this.defaultParamsConfiguration;
  }

  getParamsConfiguration(filters?: IFilter[]): IQueryParams {
    this.loadparamsConfiguration();
    if (filters) {
      filters = filters.map(filter => ({
        ...filter,
        operation: this.getOperation()
      }));
      const encodedData = encodeURIComponent(JSON.stringify(filters))

      if (encodedData) {
        this.paramsConfiguration.filterRules = encodedData
      }
    }
    return this.paramsConfiguration;
  }

  getRowSize(): number {
    this.loadRowSize();
    return this.rowSize;
  }

  getViewType(): EViewTypeOptions {
    this.loadViewType();
    return this.viewType;
  }

  getOperation(): EFilterOperation {
    this.loadOperation();
    return this.operation;
  }

  setConfigurationParams(newParams: Partial<IQueryParams>): void {
    this.defaultParamsConfiguration = { ...this.defaultParamsConfiguration, ...newParams };
  }
}
