import { ADD_PLACE, DELETE_PLACE } from './actionTypes'

export const addPlace = (place, location, image) => {
  return dispatch => {
    fetch(
      'https://us-central1-awesome-places-1548589948165.cloudfunctions.net/storeImage',
      {
        method: 'POST',
        body: JSON.stringify({
          image: image.base64
        })
      }
    )
      .catch(err => console.log(err))
      .then(res => res.json())
      .then(parsedRes => {
        const placeData = {
          name: place,
          location: location,
          image: parsedRes.imageUrl
        }
        return fetch(
          'https://awesome-places-1548589948165.firebaseio.com/places.json',
          {
            method: 'POST',
            body: JSON.stringify(placeData)
          }
        )
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
