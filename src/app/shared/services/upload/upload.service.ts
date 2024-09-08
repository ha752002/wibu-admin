import { Injectable } from '@angular/core';
import { ApiCallerService } from '@app/core/services/api-caller.service';
import { IResponseImage, IResponseImages } from '@app/shared/types/image.types';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private apiUrl = environment.galleryEndpoint;

  constructor(private apiCallerService: ApiCallerService) { }

  uploadImages(files: FormData): Observable<IResponseImages> {
    return this.apiCallerService.post<FormData, IResponseImages>(this.apiUrl.multiUpload, files);
  }
}
