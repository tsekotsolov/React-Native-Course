import { ADD_PLACE, DELETE_PLACE } from './actionTypes'

export const addPlace = (place, location, image) => {
  return {
    type: ADD_PLACE,
    payload: { place, location, image }
  }
}

export const deletePlace = key => {
  return {
    type: DELETE_PLACE,
    payload: key
  }
}
