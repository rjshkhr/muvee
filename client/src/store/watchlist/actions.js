import * as types from './constants'
import * as watchlistService from './services'
import { setNotificationAction } from '../notification/actions'

export const getWatchlistAction = () => {
  return async dispatch => {
    try {
      dispatch({ type: types.SET_WATCHLIST_LOADING })
      const { data } = await watchlistService.getWatchlist()

      dispatch({
        type: types.SET_WATCHLIST,
        payload: data
      })
    } catch (err) {
      console.error(err)

      dispatch({
        type: types.SET_WATCHLIST_ERROR,
        payload: err?.response?.data?.message || true
      })
    }
  }
}

export const addWatchlistAction = movie => {
  return async dispatch => {
    try {
      const { data } = await watchlistService.addWatchlist(movie)

      dispatch({
        type: types.ADD_WATCHLIST,
        payload: data
      })

      dispatch(setNotificationAction(`${movie.title} added to the watchlist`))
    } catch (err) {
      console.error(err)
      dispatch(
        setNotificationAction(
          `Could not add ${movie.title} to the watchlist`,
          'error'
        )
      )
    }
  }
}

export const removeWatchlistAction = movie => {
  return async dispatch => {
    try {
      const { data } = await watchlistService.removeWatchlist(movie.id)

      dispatch({
        type: types.REMOVE_WATCHLIST,
        payload: data
      })

      dispatch(
        setNotificationAction(`${movie.title} removed from the watchlist`)
      )
    } catch (err) {
      dispatch(
        setNotificationAction(
          `Could not remove ${movie.title} from the watchlist`,
          'error'
        )
      )
      console.error(err)
    }
  }
}
