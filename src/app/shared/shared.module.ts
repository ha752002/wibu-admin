import {NgModule} from '@angular/core';
import {IconComponent} from './components/icon/icon.component';
import { UploadImgComponent } from './components/upload-img/upload-img.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { OpenFormComponent } from './components/open-form/open-form.component';
import { OpenModalComponent } from './components/open-modal/open-modal.component';
import { StoryListComponent } from './components/story-list/story-list.component';
import { PreviewTheStoryComponent } from './components/preview-the-story/preview-the-story.component';
import { DragDropImgComponent } from './components/drag-drop-img/drag-drop-img.component';
import { ImgComponent } from './components/img/img.component';
import { GenreSelectorComponent } from './components/genre-selector/genre-selector.component';
import { UploadAvatarComponent } from './components/upload-avatar/upload-avatar.component';

const COMPONENTS = [
  IconComponent,
  UploadImgComponent,
  InputFieldComponent,
  OpenFormComponent,
  OpenModalComponent,
  StoryListComponent,
  PreviewTheStoryComponent,
  DragDropImgComponent,
  ImgComponent,
  GenreSelectorComponent,
  UploadAvatarComponent
];

@NgModule({
  imports: [
    COMPONENTS,
  ],
  exports: [
    COMPONENTS
  ],
  declarations: [
    
  ],
})
export class SharedModule {
}
