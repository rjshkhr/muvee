import * as types from './constants'

const initialState = {
  movies: [],
  moviesLoading: false,
  moviesError: false,
  page: null,
  totalPages: null,
  totalResults: null,
  details: null,
  detailsLoading: false,
  detailsError: null,
  recommended: [],
  similar: []
}

const moviesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_MOVIES:
      return {
        ...state,
        ...payload,
        moviesLoading: false,
        moviesError: null
      }

    case types.SET_MOVIES_LOADING:
      return { ...state, moviesLoading: true }

    case types.SET_MOVIES_ERROR:
      return { ...state, moviesLoading: false, moviesError: true }

    case types.SET_DETAILS:
      return {
        ...state,
        detailsLoading: false,
        detailsError: null,
        details: payload
      }

    case types.SET_DETAILS_LOADING:
      return { ...state, detailsLoading: true }

    case types.SET_DETAILS_ERROR:
      return { ...state, detailsLoading: false, detailsError: true }

    case types.SET_RECOMMENDED:
      return { ...state, recommended: payload }

    case types.SET_SIMILAR:
      return { ...state, similar: payload }

    default:
      return state
  }
}

export default moviesReducer
