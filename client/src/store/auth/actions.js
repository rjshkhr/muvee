import * as types from './constants'
import * as authService from './services'
import LS from '../../utils/localStorage'

export const loginAction = credentials => {
  return async dispatch => {
    try {
      dispatch({ type: types.SET_USER_LOADING })
      const { data } = await authService.login(credentials)

      dispatch({
        type: types.SET_USER,
        payload: data.user
      })

      LS.set('user', data.user)
      LS.set('token', data.token)
      LS.set('refreshToken', data.refreshToken)
    } catch (err) {
      console.error(err)

      dispatch({
        type: types.SET_USER_ERROR,
        payload: err?.response?.data?.message
      })
    }
  }
}

export const registerAction = credentials => {
  return async dispatch => {
    try {
      dispatch({ type: types.SET_USER_LOADING })
      const { data } = await authService.register(credentials)

      dispatch({
        type: types.SET_USER,
        payload: data.user
      })

      LS.set('user', data.user)
      LS.set('token', data.token)
      LS.set('refreshToken', data.refreshToken)
    } catch (err) {
      console.error(err)

      dispatch({
        type: types.SET_USER_ERROR,
        payload: err?.response?.data?.message
      })
    }
  }
}

export const logoutAction = () => {
  return async dispatch => {
    try {
      dispatch({ type: types.SET_USER_LOADING })
      await authService.logout()

      dispatch({
        type: types.SET_USER,
        payload: null
      })

      LS.remove('user')
      LS.remove('token')
      LS.remove('refreshToken')
    } catch (err) {
      console.error(err)

      dispatch({
        type: types.SET_USER_ERROR,
        payload: true
      })
    }
  }
}
