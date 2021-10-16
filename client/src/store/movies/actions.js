import * as types from './constants'
import * as movieService from './services'

export const getMoviesAction = type => {
  return async dispatch => {
    try {
      const { data } = await movieService.getMovies(type)

      dispatch({
        type: types.SET_MOVIES,
        payload: data.results
      })
    } catch (err) {
      console.error(err)
    }
  }
}
