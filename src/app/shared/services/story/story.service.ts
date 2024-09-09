import { Injectable } from '@angular/core';
import { ApiCallerService } from '@app/core/services/api-caller.service';
import { IStoryParams } from '@app/modules/admin/modules/manga-management/type/manga-Filter.type';
import { IStory, IStoryInformation, IStorys } from '@app/modules/admin/modules/story/type/story.type';
import { IResponseStory } from '@app/shared/components/open-form/types/story.type';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  private apiUrl = environment.adminEndpoint.manga;

  constructor(private apiCallerService: ApiCallerService) { }

  getAllStorys(params?: IStoryParams): Observable<IStorys> {
    return this.apiCallerService.get<IStoryParams, IStorys>(this.apiUrl.getAll, params);
  }

  getStoryById(id: string): Observable<IStory> {
    return this.apiCallerService.get<string , IStory>(this.apiUrl.getById , id);
  }
}
