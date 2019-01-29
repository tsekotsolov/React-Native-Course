import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes'

const initialState = {
  places: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: [
          ...state.places,
          {
            key: Math.random().toString(),
            place: action.payload.place,
            image: {
              uri: action.payload.image.uri,
              base64: action.payload.image.base64
            },
            location: action.payload.location
          }
        ]
      }

    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== action.payload
        })
      }

    default:
      return state
  }
}

export default reducer
