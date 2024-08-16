import { Injectable } from '@angular/core';
import { ApiCallerService } from '@app/core/services/api-caller.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private apiUrl = environment.galleryEndpoint;

  constructor(private apiCallerService: ApiCallerService) { }

  uploadImages(files: File[]): Observable<any> {
    return this.apiCallerService.post<File[], File[]>(this.apiUrl.multiUpload, files);
  }
}
