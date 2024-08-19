export interface ICreateUser {
    id?: string;
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
    id?: string;
    avatarUrl?: string;
    name?: string;
    phone?: string;
    email?: string;
    dateOfBirth?: Date;
    teams?: string;
    userType?: string;
  }