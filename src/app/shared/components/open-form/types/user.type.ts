import { EUserRole } from "@app/core/enums/user.enums";

export interface ICreateUser {
  username: string
  avatarUrl: string,
  birthday: Date,
  email: string,
  roles: EUserRole[],
  password?: string;
  confirmPassword?: string;
}

export interface IUpdateUser {
  id?: string;
  username: string
  avatarUrl: string,
  birthday: Date,
  email: string,
  roles: EUserRole[],
}

export interface IResponseUser {
  data: IUpdateUser;
  message: string;
  status?: boolean;
}

