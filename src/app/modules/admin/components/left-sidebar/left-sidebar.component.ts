import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {IUserInfo} from "@app/core/store/_auth/_auth.types";
import {Observable} from "rxjs";
import {selectUserInfo} from "@app/core/store/_auth/_auth.selectors";
import {MainState} from "@app/core/store/_store.types";

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.scss'
})
export class LeftSidebarComponent {
  userInfo$: Observable<IUserInfo | undefined> = this._store.select(selectUserInfo);

  constructor(private _store: Store<MainState>) {
    this.userInfo$.subscribe()
  }
}
