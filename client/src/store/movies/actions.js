import * as types from './constants'
import * as movieService from './services'

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
      console.error(err)

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
      console.error(err)

      dispatch({
        type: types.SET_DETAILS_ERROR,
        payload: err?.response?.data?.message || true
      })
    }
  }
}
