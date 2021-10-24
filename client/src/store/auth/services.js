import axios from 'axios'
import jwtDecode from 'jwt-decode'

import LS from '../../utils/localStorage'

export const setAuthHeader = () => {
  const token = LS.get('token')
  return {
    headers: {
      authorization: `bearer ${token}`
    }
  }
}

export const getNewToken = async () => {
  const refreshToken = LS.get('refreshToken')
  try {
    const res = await axios.post('/api/users/refresh', { refreshToken })
    return res.data
  } catch (err) {
    if (err?.response?.status === 403) {
      LS.remove('user')
      LS.remove('token')
      LS.remove('refreshToken')
    }
  }
}

export const requiresToken = axios.create()

requiresToken.interceptors.request.use(
  async config => {
    const currentDate = new Date()
    const token = LS.get('token')
    const { exp } = jwtDecode(token)

    if (exp * 1000 < currentDate.getTime()) {
      const { data } = await getNewToken()
      config.headers.authorization = `Bearer ${data.token}`
      LS.set('token', data.token)
      LS.set('refreshToken', data.refreshToken)
    }

    return config
  },
  error => Promise.reject(error)
)

export const login = async credentials => {
  const res = await axios.post('/api/users/login', credentials)
  return res.data
}

export const register = async credentials => {
  const res = await axios.post('/api/users/register', credentials)
  return res.data
}

export const logout = async () => {
  await axios.delete('/api/users/logout')
}

export const deleteAccount = async userId => {
  await requiresToken.delete(`/api/users/${userId}`, setAuthHeader())
}
