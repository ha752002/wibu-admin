import {EUserRole} from "@app/core/enums/user.enums";

export interface IUser {
  avatarUrl?: string;
  birthday?: Date;
  email?: string;
  id: string;
  roles?: EUserRole[];
  username?: string
  name?: string
  createdDate: Date;
  lastUpdated?: Date;
  description?: string;
}

export interface ITitle {
  title: string;
  titleValue:string;
}

