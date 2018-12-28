import {createStore, combineReducers} from 'redux'
import placesReducer from './reducers/placesReducer'

const rootReduser = combineReducers({
  places: placesReducer
})

const configureStore = () => {
  return createStore(rootReduser)
}

export default configureStore
