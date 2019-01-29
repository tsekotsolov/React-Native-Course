import { ADD_PLACE, DELETE_PLACE } from './actionTypes'

export const addPlace = (place, location, image) => {
  return dispatch => {
    const placeData = {
      name: place,
      location
    }
    fetch('https://awesome-places-1548589948165.firebaseio.com/places.json', {
      method: 'POST',
      body: JSON.stringify(placeData)
    })
      .catch(err => console.log(err))
      .then(res => res.json())
      .then(parsedRes => console.log(parsedRes))
  }

  // return {
  //   type: ADD_PLACE,
  //   payload: { place, location, image }
  // }
}

export const deletePlace = key => {
  return {
    type: DELETE_PLACE,
    payload: key
  }
}
