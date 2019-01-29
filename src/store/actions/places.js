import { ADD_PLACE, DELETE_PLACE } from './actionTypes'

export const addPlace = (place, location) => {
  return {
    type: ADD_PLACE,
    payload: { place, location }
  }
}

export const deletePlace = key => {
  return {
    type: DELETE_PLACE,
    payload: key
  }
}
