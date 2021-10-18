import * as types from './constants'

let timeout = null

export const setNotificationAction = (message, status = 'success') => {
  clearTimeout(timeout)

  return async dispatch => {
    dispatch({
      type: types.SET_NOTIFICATION,
      payload: { message, status }
    })

    timeout = setTimeout(() => {
      dispatch({
        type: types.REMOVE_NOTIFICATION
      })
    }, 5000)
  }
}
