export interface ICreateUser {
    id?: number;
    avatarUrl?: string;
    name?: string;
    phone?: string;
    email?: string;
    dateOfBirth?: Date;
    teams?: string;
    userType?: string;
    password?: string;
  }

  export interface IUpdateUser {
    id?: number;
    avatarUrl?: string;
    name?: string;
    phone?: string;
    email?: string;
    dateOfBirth?: Date;
    teams?: string;
    userType?: string;
  }