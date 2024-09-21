import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { InputFieldComponent } from '../input-field/input-field.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EventService } from '@app/modules/admin/services/event/event.service';
import { IInstallation } from '@app/shared/types/installation.type';
import { EFilterOperation } from '@app/core/enums/operation.enums';
import { ERowSizeOptions, ESortByOptions, ESortTypeOptions, EViewTypeOptions } from '@app/core/enums/options.enums';
import { ConfigurationService } from '@app/modules/admin/services/configuration-params/configuration.service';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    NzButtonModule,
    InputFieldComponent,
  ],
  selector: 'app-installation-form',
  templateUrl: './installation-form.component.html',
  styleUrl: './installation-form.component.scss'
})
export class InstallationFormComponent implements OnInit {

  installation: IInstallation = {
    pageSize: 24,
    sortBy: ESortByOptions.Views,
    sortType: ESortTypeOptions.ASC
  };
  rowSize: number = 3;
  operation: EFilterOperation = EFilterOperation.EQUAL
  viewType?: EViewTypeOptions = EViewTypeOptions.Grid;

  operations: string[] = Object.values(EFilterOperation);
  sortTypeOptions: string[] = Object.values(ESortTypeOptions);
  sortByOptions: string[] = Object.values(ESortByOptions);
  viewTypeOptions: string[] = Object.values(EViewTypeOptions);
  rowSizeOptions: number[] = Object.values(ERowSizeOptions).filter(value => typeof value === 'number') as number[];
  LabelRowSizeOptions: number[] = [12, 8, 6, 4]

  constructor(private eventService: EventService , private configService :ConfigurationService) { }

  ngOnInit(): void {
    this.loadConfigParams();
  }

  loadConfigParams(): void {
    this.viewType = this.configService.getViewType();
    this.rowSize = this.configService.getRowSize();
    this.operation = this.configService.getOperation();
    this.installation = this.configService.getParamsConfiguration();
  }

  onFieldValueChange(field: string, value: any): void {
    this.installation = { ...this.installation, [field]: value ?? '' };
    localStorage.setItem('configParams', JSON.stringify(this.installation));
    this.eventService.emitEvent();
  }

  updateConfig(key: string, value: any): void {
    const updatedValue = value ?? '';
    localStorage.setItem(key, JSON.stringify(updatedValue));
    this.eventService.emitEvent();
  }

  changeViewType(value: any) {
    this.updateConfig('viewType', value);
  }

  changeRowSize(value: any) {
    this.updateConfig('rowSize', value);
  }

  changeOperation(value: any) {
    this.updateConfig('operation', value);
  }


}
