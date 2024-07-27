import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {IUserInfo} from "@app/core/store/_auth/_auth.types";
import {selectUserInfo} from "@app/core/store/_auth/_auth.selectors";
import {Store} from "@ngrx/store";
import {MainState} from "@app/core/store/_store.types";

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss'
})
export class MyProfileComponent {
  userInfo$: Observable<IUserInfo | undefined> = this._store.select(selectUserInfo);

  constructor(private _store: Store<MainState>) {
    this.userInfo$.subscribe()
  }

}
