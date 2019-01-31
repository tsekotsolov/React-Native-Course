import {
  SET_PLACES,
  REMOVE_PLACE
} from './actionTypes'
import { uiStartLoading, uiStopLoading } from './index'

export const addPlace = (place, location, image) => {
  return dispatch => {
    dispatch(uiStartLoading())
    fetch(
      'https://us-central1-awesome-places-1548589948165.cloudfunctions.net/storeImage',
      {
        method: 'POST',
        body: JSON.stringify({
          image: image.base64
        })
      }
    )
      .catch(err => {
        dispatch(uiStopLoading())
        alert('Something went wrong! Try again!')
        console.log(err)
      })
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
      .catch(err => {
        dispatch(uiStopLoading())
        alert('Something went wrong! Try again!')
        console.log(err)
      })
      .then(res => res.json())
      .then(parsedRes => {
        console.log(parsedRes)
        dispatch(uiStopLoading())
      })
  }
}

export const getPlaces = () => {
  return dispatch => {
    fetch('https://awesome-places-1548589948165.firebaseio.com/places.json')
      .catch(err => {
        console.log(err)
        alert('Something went wrong')
      })
      .then(res => res.json())
      .then(parsedRes => {
        let places = []
        for (const key in parsedRes) {
          places.push({
            ...parsedRes[key],
            image: {
              uri: parsedRes[key].image
            },
            key: key
          })
        }

        dispatch(setPlaces(places))
      })
  }
}

export const setPlaces = places => {
  return {
    type: SET_PLACES,
    payload: places
  }
}

export const deletePlace = key => {
  return dispatch => {
    dispatch(removePlace(key))
    fetch(
      `https://awesome-places-1548589948165.firebaseio.com/places/${key}.json`,
      {
        method: 'DELETE'
      }
    )
      .catch(err => {
        alert('Something went wrong! Try again!')
        console.log(err)
      })
      .then(res => res.json())
      .then(parsedRes => {
        console.log('Place Deleted!')
      })
  }
}

export const removePlace = key => {
  return {
    type: REMOVE_PLACE,
    payload: key
  }
}
