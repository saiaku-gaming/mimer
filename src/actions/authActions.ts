export enum AuthKeys {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT'
}

export interface LoginAction {
  type: AuthKeys.LOGIN
  auth: boolean
  role: string
}

export interface LogoutAction {
  type: AuthKeys.LOGOUT
  auth: boolean
}

export type AuthActionTypes = LoginAction | LogoutAction

export const login = (username: string, password: string): LoginAction => {
  return { type: AuthKeys.LOGIN, auth: true, role: 'admin' }
}

export const logout = (): LogoutAction => {
  return { type: AuthKeys.LOGOUT, auth: false }
}
