import * as types from './constants'
import LS from '../../utils/localStorage'

const initialState = {
  user: LS.get('user'),
  userLoading: false,
  userError: null
}

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_USER:
      return { ...state, userLoading: false, userError: null, user: payload }

    case types.SET_USER_LOADING:
      return { ...state, userLoading: true }

    case types.SET_USER_ERROR:
      return { ...state, userLoading: false, userError: payload }

    default:
      return state
  }
}

export default authReducer
