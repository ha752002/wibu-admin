export interface ILoginPayload {
  email: string,
  password: string
}

export type ActionProps<P, S = {}> = {
  payload: P,
  ignoreStorageKeys?: (keyof S)[]
}

export interface ILoginResponse {
  token: string
}
