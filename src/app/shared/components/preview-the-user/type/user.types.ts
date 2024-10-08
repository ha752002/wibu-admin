import {EUserRole} from "@app/core/enums/user.enums";

export interface IUser {
  avatarUrl?: string;
  birthday?: Date;
  createdDate: Date;
  email?: string;
  id: string;
  lastUpdated?: Date;
  roles?: EUserRole[];
  username?: string
  name?: string
  description?: string;
}

export interface ITitle {
  title: string;
  titleValue:string;
}

