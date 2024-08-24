import { Injectable } from '@angular/core';
import { ApiCallerService } from '@app/core/services/api-caller.service';
import { IResponseImage } from '@app/shared/types/image.types';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private apiUrl = environment.galleryEndpoint;

  constructor(private apiCallerService: ApiCallerService) { }

  uploadImages(files: FormData): Observable<IResponseImage> {
    return this.apiCallerService.post<FormData, IResponseImage>(this.apiUrl.multiUpload, files);
  }
}
