import {EUserRole} from "@app/core/enums/user.enums";

export type ActionProps<P, S = {}> = {
  payload: P,
  ignoreStorageKeys?: (keyof S)[]
}


export type AuthState = {
  token?: string,
  expires?: Date,
  userInfo?: {
    createdDate: Date,
    email: string,
    id: string,
    lastUpdated: Date,
    roles: EUserRole,
    username: string
  }
}

export interface ILoginPayload {
  email: string,
  password: string
}

export interface ILoginResponse {
  token: string,
  expires: Date
}

export interface IUserInfoResponse {
  "id": string,
  "email": string,
  "username": string,
  "roles": string[],
  "createdDate": Date,
  "lastUpdated": Date
}


