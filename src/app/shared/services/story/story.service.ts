import { Injectable } from '@angular/core';
import { ApiCallerService } from '@app/core/services/api-caller.service';
import { IStory, IStoryInformation, IStorys } from '@app/modules/admin/modules/story/type/story.type';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  private apiGetAllUrl = environment.adminEndpoint.manga;

  constructor(private apiCallerService: ApiCallerService) { }

  getAllStorys(): Observable<IStorys> {
    return this.apiCallerService.get<null, IStorys>(this.apiGetAllUrl.getAll);
  }

  getStoryById(id: number| string): Observable<IStory> {
    const endpoint = this.apiGetAllUrl.getById.replace('{id}', id.toString());
    return this.apiCallerService.get<null, IStory>(endpoint);
  }
}
