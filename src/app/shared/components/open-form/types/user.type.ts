import { EUserRole } from "@app/core/enums/user.enums";

export interface ICreateUser {
  username: string
  avatarUrl: string,
  birthday: Date,
  email: string,
  roles: EUserRole[],
  password?: string;
}

export interface IUpdateUser {
  id?: string;
  avatarUrl?: string;
  name?: string;
  phone?: string;
  email?: string;
  dateOfBirth?: Date;
  teams?: string;
  userType?: string;
}