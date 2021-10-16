import * as types from './constants'

const initialState = {
  movies: [],
  details: null
}

const moviesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_MOVIES:
      return { ...state, movies: payload }
    case types.SET_DETAILS:
      return { ...state, details: payload }
    default:
      return state
  }
}

export default moviesReducer
