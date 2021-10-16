import * as types from './constants'

const initialState = {
  movies: []
}

const moviesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_MOVIES:
      return { ...state, movies: payload }
    default:
      return state
  }
}

export default moviesReducer
