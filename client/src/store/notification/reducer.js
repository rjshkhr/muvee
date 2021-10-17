import * as types from './constants'

const initialState = {
  message: null,
  status: null
}

const notificationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_NOTIFICATION:
      return { ...state, message: payload.message, status: payload.status }
    case types.REMOVE_NOTIFICATION:
      return { ...state, message: null, status: null }
    default:
      return state
  }
}

export default notificationReducer
