import { Component, OnInit } from '@angular/core';
import { finalize, of, Subscription } from "rxjs";
import { IUser, IuserFilter } from "@app/modules/admin/modules/user-management/type/user.types";
import { EUserRole } from "@app/core/enums/user.enums";
import { UserApiService } from './services/user-api.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss'
})
export class UserManagementComponent implements OnInit {
  filter: IuserFilter = {
    search: '',
    roles: '',
  }

  users: IUser[] = []
  userTypeList: EUserRole[] = [
    EUserRole.ROLE_ADMIN,
    EUserRole.ROLE_USER
  ];
  private subscriptions: Subscription = new Subscription();

  constructor(
    private userApiService: UserApiService
  ) { }

  ngOnInit(): void {
    this.getAllStorys()
    console.log(this.users);
    // console.log(this.userList$);
    
  }

  getUserList(list: IUser[]) {
    return list as IUser[];
  }

  getAllStorys(): void {
    this.users = []
    this.subscriptions.add(
      this.userApiService.getAllUsers().pipe(
        finalize(() => {
          console.log('storys loaded');
        })
      ).subscribe(
        response => {
          this.users = response.data;
        },
        error => {
          console.error('Error loading storys', error);
        }
      )
    );
  }

  onFieldValueChange(field: keyof IuserFilter, value: string | number | Date | undefined): void {

    console.log(this.filter);
  }
}
