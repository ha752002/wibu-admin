import { Injectable } from '@angular/core';
import { ApiCallerService } from '@app/core/services/api-caller.service';
import { IStoryInformation } from '@app/modules/admin/modules/story/type/story.type';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  private apiGetAllUrl = environment.adminEndpoint.manga;

  constructor(private apiCallerService: ApiCallerService) { }

  getAllStorys(): Observable<IStoryInformation[]> {
    return this.apiCallerService.get<null, IStoryInformation[]>(this.apiGetAllUrl.getAll);
  }

  getStoryById(id: number| string): Observable<IStoryInformation> {
    const endpoint = this.apiGetAllUrl.getById.replace('{id}', id.toString());
    return this.apiCallerService.get<null, IStoryInformation>(endpoint);
  }
}
