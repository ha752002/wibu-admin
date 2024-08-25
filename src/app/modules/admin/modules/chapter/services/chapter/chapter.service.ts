import { Injectable } from '@angular/core';
import { ApiCallerService } from '@app/core/services/api-caller.service';
import { environment } from 'src/environments/environment';
import { IResponseChapter } from '../../types/chapter.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {

  private apiUrl = environment.adminEndpoint.chapter;

  constructor(private apiCallerService: ApiCallerService) { }

  getChapterById(id: string): Observable<IResponseChapter> {
    return this.apiCallerService.get<string , IResponseChapter>(this.apiUrl.getById , id);
  }
}
