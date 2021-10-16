import { setAuthHeader, requiresToken } from '../auth/services'

export const getWatchlist = async () => {
  const res = await requiresToken.get('/api/watchlist', setAuthHeader())
  return res.data
}

export const addWatchlist = async movie => {
  const res = await requiresToken.post('/api/watchlist', movie, setAuthHeader())
  return res.data
}

export const removeWatchlist = async id => {
  const res = await requiresToken.delete(
    `/api/watchlist/${id}`,
    setAuthHeader()
  )
  return res.data
}
