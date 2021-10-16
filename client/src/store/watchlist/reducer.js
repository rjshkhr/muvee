import * as types from './constants'

const initialState = {
  movies: [],
  moviesLoading: false,
  moviesError: null
}

const moviesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_WATCHLIST:
      return {
        ...state,
        moviesLoading: false,
        moviesError: false,
        movies: payload
      }

    case types.SET_WATCHLIST_LOADING:
      return { ...state, moviesLoading: true }

    case types.SET_WATCHLIST_ERROR:
      return { ...state, moviesLoading: false, moviesError: payload }

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
