import { Injectable } from '@angular/core';
import { ApiCallerService } from '@app/core/services/api-caller.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IChapter } from '../../types/chapter.type';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {
  private apiUrl = environment.adminEndpoint.chapter;

  constructor(private apiCallerService: ApiCallerService) { }

  createChapter(chapter: IChapter): Observable<IChapter> {
    return this.apiCallerService.post<IChapter, IChapter>(this.apiUrl.push, chapter);
  }

  updateChapter(id: number, chapter: IChapter): Observable<IChapter> {
    return this.apiCallerService.patch(`${this.apiUrl.update}/${id}`, chapter);
  }

  deleteChapter(id: number): Observable<void> {
    return this.apiCallerService.patch<void>(this.apiUrl.delete.replace('{id}', id.toString()), {});
  }
}
