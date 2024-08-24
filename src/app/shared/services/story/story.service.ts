import { Injectable } from '@angular/core';
import { ApiCallerService } from '@app/core/services/api-caller.service';
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

  getAllStorys(): Observable<IStorys> {
    return this.apiCallerService.get<null, IStorys>(this.apiUrl.getAll);
  }

  getStoryById(id: string): Observable<IStory> {
    return this.apiCallerService.get<string , IStory>(this.apiUrl.getById , id);
  }
}
