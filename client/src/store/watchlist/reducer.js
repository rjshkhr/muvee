import * as types from './constants'

const initialState = {
  movies: []
}

const moviesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_WATCHLIST:
      return { ...state, movies: payload }
    case types.ADD_WATCHLIST: {
      const updatedMovies = state.movies.concat(payload)
      return { ...state, movies: updatedMovies }
    }
    case types.REMOVE_WATCHLIST: {
      const updatedMovies = state.movies.filter(
        movie => movie.id !== payload.id
      )
      return { ...state, movies: updatedMovies }
    }
    default:
      return state
  }
}

export default moviesReducer
