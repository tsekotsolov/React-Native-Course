/* global alert, fetch */

import {
  SET_PLACES,
  REMOVE_PLACE
} from './actionTypes'
import { uiStartLoading, uiStopLoading, getToken } from './index'

export const addPlace = (place, location, image) => {
  return dispatch => {
    let authToken
    dispatch(uiStartLoading())
    dispatch(getToken())
      .catch(() => {
        alert('No valid Token found')
      })
      .then(token => {
        authToken = token
        return fetch(
          'https://us-central1-awesome-places-1548589948165.cloudfunctions.net/storeImage',
          {
            method: 'POST',
            body: JSON.stringify({
              image: image.base64
            }),
            headers: {
              'Authorization': 'Bearer ' + authToken
            }
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
        const placeData = {
          name: place,
          location: location,
          image: parsedRes.imageUrl
        }
        return fetch(
          'https://awesome-places-1548589948165.firebaseio.com/places.json?auth=' + authToken,
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
    dispatch(getToken())
      .then(token => {
        return fetch('https://awesome-places-1548589948165.firebaseio.com/places.json?auth=' + token)
      })
      .catch(() => {
        alert('No valid Token found')
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
      .catch(err => {
        console.log(err)
        alert('Something went wrong')
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
    dispatch(getToken())
      .catch(() => {
        alert('No valid Token found')
      })
      .then(token => {
        dispatch(removePlace(key))
        return fetch(`https://awesome-places-1548589948165.firebaseio.com/places/${key}.json?auth=${token}`,
          {
            method: 'DELETE'
          }
        )
      })
      .then(res => res.json())
      .then(parsedRes => {
        console.log('Place Deleted!')
      }).catch(err => {
        alert('Something went wrong! Try again!')
        console.log(err)
      })
  }
}

export const removePlace = key => {
  return {
    type: REMOVE_PLACE,
    payload: key
  }
}
