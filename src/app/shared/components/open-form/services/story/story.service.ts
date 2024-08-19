import { Injectable } from '@angular/core';
import { ApiCallerService } from '@app/core/services/api-caller.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICreateStory } from '../../types/story.type';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  private apiUrl = environment.adminEndpoint.manga;

  constructor(private apiCallerService: ApiCallerService) { }

  createStory(storyData: ICreateStory): Observable<ICreateStory> {
    return this.apiCallerService.post<ICreateStory, ICreateStory>(this.apiUrl.push, storyData);
  }

  updateStory(id: string, storyData: ICreateStory): Observable<ICreateStory> {
    return this.apiCallerService.put(`${this.apiUrl.update}/${id}`, storyData);
  }

  deleteStory(id: string): Observable<void> {
    return this.apiCallerService.patch<void>(this.apiUrl.delete.replace('{id}', id.toString()), {});
  }
}
