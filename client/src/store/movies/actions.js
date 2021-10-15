import * as types from './constants'
import * as movieService from './services'

export const getPopularAction = () => {
  return async dispatch => {
    try {
      const { data } = await movieService.getPopular()
      dispatch({
        type: types.SET_POPULAR_MOVIES,
        payload: data?.results
      })
    } catch (err) {
      console.error(err)
    }
  }
}
