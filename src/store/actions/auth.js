/* global alert, fetch */

import { uiStartLoading, uiStopLoading } from './index'
import {SET_AUTH_TOKEN} from './actionTypes'
import startMainTabs from '../../screens/MainTabs/startMainTabs'

export const tryAuth = (authData, isInLoginMode) => {
  return dispatch => {
    dispatch(uiStartLoading())
    let url =
      'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDz-ESTzaQdVu3hPir9KuAlsRImSWSMcjc'

    if (!isInLoginMode) {
      url =
        'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDz-ESTzaQdVu3hPir9KuAlsRImSWSMcjc'
    }

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .catch(err => {
        console.log(err)
        alert('Authentication failed! Try again!')
        dispatch(uiStopLoading())
      })
      .then(res => res.json())
      .then(parsedRes => {
        dispatch(uiStopLoading())
        if (!parsedRes.idToken) {
          alert('Authentication failed')
        } else {
          dispatch(setAuthToken(parsedRes.idToken))
          startMainTabs()
        }
      })
  }
}

export const setAuthToken = token => {
  return {
    type: SET_AUTH_TOKEN,
    payload: token
  }
}

export const getToken = () => {
  return (dispatch, getState) => {
    const promise = new Promise((resolve,reject) => {
      const token = getState().auth.token
      if(!token){
      reject()
      } else {
        resolve(token)
      }
   })
   return promise
 }
}
