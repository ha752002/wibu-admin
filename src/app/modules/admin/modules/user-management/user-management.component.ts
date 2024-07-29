import {Component, OnInit} from '@angular/core';
import {of} from "rxjs";
import {IUser} from "@app/modules/admin/modules/user-management/type/user.types";
import {EUserRole} from "@app/core/enums/user.enums";

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss'
})
export class UserManagementComponent implements OnInit {
  data = [
    {
      avatarUrl: 'https://example.com/avatar1.jpg',
      birthday: new Date('1990-01-01'),
      createdDate: new Date(),
      email: 'user1@example.com',
      id: '1',
      lastUpdated: new Date(),
      roles: [EUserRole.ROLE_USER],
      username: 'user1'
    },
    {
      avatarUrl: 'https://example.com/avatar2.jpg',
      birthday: new Date('1992-02-02'),
      createdDate: new Date(),
      email: 'user2@example.com',
      id: '2',
      lastUpdated: new Date(),
      roles: [EUserRole.ROLE_ADMIN],
      username: 'user2'
    },
    {
      avatarUrl: 'https://example.com/avatar3.jpg',
      birthday: new Date('1994-03-03'),
      createdDate: new Date(),
      email: 'user3@example.com',
      id: '333',
      lastUpdated: new Date(),
      roles: [EUserRole.ROLE_USER],
      username: 'user3'
    },
    {
      avatarUrl: 'https://example.com/avatar4.jpg',
      birthday: new Date('1996-04-04'),
      createdDate: new Date(),
      email: 'user4@example.com',
      id: '4',
      lastUpdated: new Date(),
      roles: [EUserRole.ROLE_ADMIN, EUserRole.ROLE_USER],
      username: 'user4'
    }
  ] as IUser[]
  userList$ = of(this.data as []);

  constructor() {
  }

  ngOnInit(): void {
  }

  getUserList(list: IUser[]) {
    return list as IUser[];
  }


}
