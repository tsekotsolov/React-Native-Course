/* global __DEV__, */

import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import placesReducer from './reducers/placesReducer'
import uiReducer from './reducers/uiReducer'
import authReducer from './reducers/authReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  places: placesReducer,
  ui: uiReducer,
  auth: authReducer
})

let composeEnchancers = compose
if (__DEV__) {
  composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

const configureStore = () => {
  return createStore(rootReducer, composeEnchancers(applyMiddleware(thunk)))
}

export default configureStore
