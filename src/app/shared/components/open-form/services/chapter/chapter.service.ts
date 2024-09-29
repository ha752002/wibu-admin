import { Injectable } from '@angular/core';
import { ApiCallerService } from '@app/core/services/api-caller.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IChapter, IResponseChapter, ISimpleChapter } from '../../types/chapter.type';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {
  private apiUrl = environment.adminEndpoint.chapter;

  constructor(private apiCallerService: ApiCallerService) { }

  getChapterById(id: string): Observable<IResponseChapter> {
    return this.apiCallerService.get<string , IResponseChapter>(this.apiUrl.getById , id);
  }

  createChapter(chapter: ISimpleChapter): Observable<IResponseChapter> {
    return this.apiCallerService.post<ISimpleChapter, IResponseChapter>(this.apiUrl.push, chapter);
  }

  updateChapter(id: string, chapter: ISimpleChapter): Observable<IResponseChapter> {
    return this.apiCallerService.put<ISimpleChapter, IResponseChapter>(`${this.apiUrl.update}/${id}`, chapter);
  }

  deleteChapter(id: string): Observable<void> {
    return this.apiCallerService.patch<void>(this.apiUrl.delete.replace('{id}', id.toString()), {});
  }
}
