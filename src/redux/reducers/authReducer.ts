import { AuthKeys, AuthActionTypes } from '../../actions/authActions'

interface State {
  auth: boolean
  role: string | null
}

const authReducer = (state: State = { auth: false, role: null }, action: AuthActionTypes): State => {
  switch (action.type) {
    case AuthKeys.LOGIN:
      return { auth: action.auth, role: action.role }
    case AuthKeys.LOGOUT:
      return { auth: action.auth, role: null }
    default:
      return state
  }
}

export default authReducer
