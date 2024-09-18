import {NgModule} from '@angular/core';
import {IconComponent} from './components/icon/icon.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { OpenFormComponent } from './components/open-form/open-form.component';
import { OpenModalComponent } from './components/open-modal/open-modal.component';
import { StoryListComponent } from './components/story-list/story-list.component';
import { PreviewTheStoryComponent } from './components/preview-the-story/preview-the-story.component';
import { DragDropImgComponent } from './components/drag-drop-img/drag-drop-img.component';
import { ImgComponent } from './components/img/img.component';
import { GenreSelectorComponent } from './components/genre-selector/genre-selector.component';
import { UploadAvatarComponent } from './components/upload-avatar/upload-avatar.component';
import { AuthorSelectorComponent } from './components/author-selector/author-selector.component';
import { PreviewTheUserComponent } from './components/preview-the-user/preview-the-user.component';
import { ConfirmationFormComponent } from './components/confirmation-form/confirmation-form.component';
import { ItemAuthorComponent } from './components/item-author/item-author.component';
import { TitlePageComponent } from './components/title-page/title-page.component';
import { InstallationFormComponent } from './components/installation-form/installation-form.component';

const COMPONENTS = [
  IconComponent,
  InputFieldComponent,
  OpenFormComponent,
  OpenModalComponent,
  StoryListComponent,
  PreviewTheStoryComponent,
  DragDropImgComponent,
  ImgComponent,
  GenreSelectorComponent,
  UploadAvatarComponent,
  AuthorSelectorComponent,
  PreviewTheUserComponent,
  ConfirmationFormComponent,
  ItemAuthorComponent,
  TitlePageComponent,
  InstallationFormComponent,
];

@NgModule({
  imports: [
    COMPONENTS,
  ],
  exports: [
    COMPONENTS
  ],

})
export class SharedModule {
}
