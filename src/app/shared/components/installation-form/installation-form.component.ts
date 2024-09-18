import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { InputFieldComponent } from '../input-field/input-field.component';
import { IInstallation } from '@app/shared/types/Installation.type';
import { FormBuilder, FormGroup } from '@angular/forms';
import { viewType } from '../story-list/story-list.component';
import { EventService } from '@app/modules/admin/services/event/event.service';

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
export class InstallationFormComponent implements OnInit{

  installation: IInstallation = {
    pageNumber: 24,
    pageSize:24,
    sortBy:'date',
    sortType:'alphabetical',
  };
  rowSize: number = 3;
  viewType?: viewType;


  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.loadConfigParams();

  }

  loadConfigParams(): void {

    const storedConfig = localStorage.getItem('configParams');
    const storedRowSize = localStorage.getItem('rowSize');
    const storedViewType = localStorage.getItem('viewType');

    if (storedRowSize) {
      this.rowSize = Number(storedRowSize);
    }

    if (storedViewType) {
      this.viewType = JSON.parse(storedViewType) as viewType;
    }
    
    if (storedConfig) {
      this.installation = JSON.parse(storedConfig);
    }

    if(!storedConfig && !storedViewType && !storedRowSize){
      localStorage.setItem('configParams', JSON.stringify(this.installation));

    }
    // console.log(this.installation);
    console.log(this.viewType);
    console.log(this.rowSize);
    
  }

  onFieldValueChange(field: string, value: any): void {
    this.installation = { ...this.installation, [field]: value ?? '' };
    localStorage.setItem('configParams', JSON.stringify(this.installation));
    this.eventService.emitEvent();
  }

  changeViewType(value: any) {
    this.viewType = value ?? '';
    localStorage.setItem('viewType', JSON.stringify(this.viewType));
    this.eventService.emitEvent();
  }

  changeRowSize(value: any) {
    this.rowSize = value ?? '';;
    localStorage.setItem('rowSize', JSON.stringify(this.rowSize));
    this.eventService.emitEvent();
  }

}
