const validateInput = (value, fieldType, controlValue) => {
  switch (fieldType) {
    case 'email':

      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(value).toLowerCase())

    case 'password':
      return value.length >= 6

    case 'confirmPassword':
      return value === controlValue
  }
}

export default validateInput
