import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes'

const initialState = {
  places: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: [...state.places,
          {
            key: Math.random().toString(),
            place: action.payload,
            image: {
              uri: 'https://usit-blog.s3-eu-west-1.amazonaws.com/wp-content/uploads/2018/02/26140820/Cook-Islands-768x561.jpg'
            }
          }]
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
