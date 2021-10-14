import * as types from './constants'
import LS from '../../utils/localStorage'

const initialState = {
  user: LS.get('user'),
  error: null,
  isLoading: false
}

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_USER:
      return { ...state, isLoading: false, error: null, user: payload }
    case types.SET_ERROR:
      return { ...state, error: payload }
    default:
      return state
  }
}

export default authReducer
