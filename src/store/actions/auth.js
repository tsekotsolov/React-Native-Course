
import { uiStartLoading, uiStopLoading } from './index'
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
        if (parsedRes.error) {
          alert('Authentication failed')
        } else {
          startMainTabs()
        }
      })
  }
}
