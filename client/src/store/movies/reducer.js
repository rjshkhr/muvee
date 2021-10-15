import * as types from './constants'

const initialState = {
  popular: []
}

const moviesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_POPULAR_MOVIES:
      return { ...state, popular: payload }
    default:
      return state
  }
}

export default moviesReducer
