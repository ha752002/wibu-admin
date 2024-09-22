import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { IUser } from './type/user.types';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { IStoryInformation } from '@app/modules/admin/modules/manga-management/type/manga.type';
import { IFilter } from '@app/modules/admin/types/meta.type';
import { IValueFilter } from '@app/modules/admin/modules/manga-management/type/manga-Filter.type';
import { EFilterOperation } from '@app/core/enums/operation.enums';
import { finalize, Subscription } from 'rxjs';
import { IQueryParams } from '@app/modules/admin/types/query-params.type';
import { StoryService } from '@app/shared/services/story/story.service';
import { EventService } from '@app/modules/admin/services/event/event.service';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    NzButtonModule,
    NzAvatarModule,
    UserProfileComponent
  ],
  selector: 'app-preview-the-user',
  templateUrl: './preview-the-user.component.html',
  styleUrl: './preview-the-user.component.scss'
})
export class PreviewTheUserComponent {
  @Input() user?: IUser;
  @Input() case?: 'user' | 'author';
}
