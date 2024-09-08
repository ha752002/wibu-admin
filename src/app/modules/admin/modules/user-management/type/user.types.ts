import {EUserRole} from "@app/core/enums/user.enums";

export interface IUser {
  id: string,
  username: string
  avatarUrl: string,
  birthday: Date,
  email: string,
  roles: EUserRole[],
  lastUpdated: Date,
  createdDate: Date,
}

export interface IResponseUsers {
  data: IUser[];
  message: string;
  status?: boolean;
}

export interface IResponseUser {
  data: IUser;
  message: string;
  status?: boolean;
}

export interface IuserFilter {
  search?:string,
  roles?: string,
}
