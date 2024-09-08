import { Component, OnDestroy, OnInit } from '@angular/core';
import { finalize, of, Subscription } from "rxjs";
import { IUser, IuserFilter } from "@app/modules/admin/modules/user-management/type/user.types";
import { EUserRole } from "@app/core/enums/user.enums";
import { UserApiService } from './services/user-api.service';
import { EventService } from '../../services/event/event.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss'
})
export class UserManagementComponent implements OnInit ,OnDestroy{
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
  private eventSubscription!: Subscription;

  constructor(
    private eventService: EventService,
    private userApiService: UserApiService
  ) { }

  ngOnInit(): void {
    this.eventSubscription = this.eventService.event$.subscribe(() => {
      this.getAllUsers();
    });
    this.getAllUsers()    
  }

  getUserList(list: IUser[]) {
    return list as IUser[];
  }

  getAllUsers(): void {
    this.users = []
    this.subscriptions.add(
      this.userApiService.getAllUsers().pipe(
        finalize(() => {
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
  }

  ngOnDestroy() {
    if (this.eventSubscription) {
      this.eventSubscription.unsubscribe();
    }
  }
}
