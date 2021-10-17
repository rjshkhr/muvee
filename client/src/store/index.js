import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

import authReducer from './auth/reducer'
import moviesReducer from './movies/reducer'
import watchlistReducer from './watchlist/reducer'
import notificationReducer from './notification/reducer'

const rootReducer = combineReducers({
  auth: authReducer,
  movieslist: moviesReducer,
  watchlist: watchlistReducer,
  notification: notificationReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
