import {createStore, combineReducers, compose} from 'redux'
import placesReducer from './reducers/placesReducer'

const rootReduser = combineReducers({
  places: placesReducer
})

let composeEnchancers = compose
if (__DEV__) {
  composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

const configureStore = () => {
  return createStore(rootReduser, composeEnchancers())
}

export default configureStore
