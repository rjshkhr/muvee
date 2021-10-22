import * as types from './constants'
import * as movieService from './services'
import { setNotificationAction } from '../notification/actions'

export const getMoviesAction = (type, page) => {
  return async dispatch => {
    try {
      dispatch({ type: types.SET_MOVIES_LOADING })
      const { data } = await movieService.getMovies(type, page)

      dispatch({
        type: types.SET_MOVIES,
        payload: {
          page: data.page,
          movies: data.results,
          totalPages: data.total_pages,
          totalResults: data.total_results
        }
      })
    } catch (err) {
      dispatch(setNotificationAction('Could not fetch movies', 'error'))
      dispatch({
        type: types.SET_MOVIES_ERROR,
        payload: err?.response?.data?.message || true
      })
    }
  }
}

export const getDetailsActions = movieId => {
  return async dispatch => {
    try {
      dispatch({ type: types.SET_DETAILS_LOADING })
      const { data } = await movieService.getDetails(movieId)

      dispatch({
        type: types.SET_DETAILS,
        payload: data
      })
    } catch (err) {
      dispatch(setNotificationAction('Could not fetch movie details', 'error'))
      dispatch({
        type: types.SET_DETAILS_ERROR,
        payload: err?.response?.data?.message || true
      })
    }
  }
}

export const getRecommendedAction = movieId => {
  return async dispatch => {
    try {
      const { data } = await movieService.getRecommended(movieId)
      dispatch({
        type: types.SET_RECOMMENDED,
        payload: data.results
      })
    } catch (err) {
      dispatch(
        setNotificationAction('Could not fetch recommended movies', 'error')
      )
    }
  }
}

export const getSimilarAction = movieId => {
  return async dispatch => {
    try {
      const { data } = await movieService.getSimilar(movieId)
      dispatch({
        type: types.SET_SIMILAR,
        payload: data.results
      })
    } catch (err) {
      dispatch(setNotificationAction('Could not fetch similar movies', 'error'))
    }
  }
}
