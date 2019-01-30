import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import placesReducer from './reducers/placesReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  places: placesReducer
})

let composeEnchancers = compose
if (__DEV__) {
  composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

const configureStore = () => {
  return createStore(rootReducer, composeEnchancers(applyMiddleware(thunk)))
}

export default configureStore
