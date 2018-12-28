import {ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE} from './actionTypes'

export const addPlace = place => {
  return {
    type: ADD_PLACE,
    payload: place
  }
}

export const deletePlace = key => {
  return {
    type: DELETE_PLACE,
    payload: key
  }
}

export const selectPlace = key => {
  return {
    type: SELECT_PLACE,
    payload: key
  }
}

export const deselectPlace = _ => {
  return {
    type: DESELECT_PLACE
  }
}
