import * as types from './constants'

export const setNotificationAction = (message, status = 'success') => ({
  type: types.SET_NOTIFICATION,
  payload: { message, status }
})

export const removeNotificationAction = () => ({
  type: types.REMOVE_NOTIFICATION
})
