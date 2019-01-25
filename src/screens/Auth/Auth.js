import React, { Component } from 'react'
import {
  View,
  Dimensions,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView
} from 'react-native'
import startMainTabs from '../MainTabs/startMainTabs'
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'
import HeadingText from '../../components/UI/HeadingText/HeadingText'
import MainText from '../../components/UI/MainText/MainText'
import backgroundImage from '../../assets/background.jpg'
import ButtonWithBackground from '../../components/UI/Button/ButtonWithBackground'
import validateInput from '../../utility/validation'
import { connect } from 'react-redux'
import { tryAuth } from '../../store/actions/index'

class AuthScreen extends Component {
  state = {
    viewMode: Dimensions.get('window').height > 500 ? 'portrait' : 'landscape',
    isInLoginMode: true,
    inputFieldsData: {
      email: {
        value: '',
        isValid: true
      },
      password: {
        value: '',
        isValid: true
      },
      confirmPassword: {
        value: '',
        isValid: true
      }
    }
  }

  onDeviceOrientationChange = _ => {
    this.setState({
      viewMode: Dimensions.get('window').height > 500 ? 'portrait' : 'landscape'
    })
  }

  componentWillMount() {
    Dimensions.addEventListener('change', this.onDeviceOrientationChange)
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.onDeviceOrientationChange)
  }

  switchAuthModeHandler = () => {
    this.setState(prevState => {
      return {
        isInLoginMode: !prevState.isInLoginMode
      }
    })
  }

  loginHandler = _ => {
    const authData = {
      email: this.state.inputFieldsData.email.value,
      password: this.state.inputFieldsData.password.value
    }
    this.props.onLogin(authData)
    startMainTabs()
  }

  inputHandler = (value, fieldType, controlValue) => {
    this.setState(prevState => {
      return {
        inputFieldsData: {
          ...prevState.inputFieldsData,
          confirmPassword: {
            value:
              fieldType === 'password'
                ? ''
                : prevState.inputFieldsData.confirmPassword.value,
            isValid:
              fieldType === 'password'
                ? false
                : prevState.inputFieldsData.confirmPassword.isValid
          },

          [fieldType]: {
            value: value,
            isValid: validateInput(value, fieldType, controlValue)
          }
        }
      }
    })
  }

  render() {
    let headingText = null

    let isFormValid =
      this.state.inputFieldsData.email.isValid &&
      this.state.inputFieldsData.password.isValid &&
      this.state.inputFieldsData.confirmPassword.isValid &&
      this.state.inputFieldsData.email.value &&
      this.state.inputFieldsData.password.value &&
      this.state.inputFieldsData.confirmPassword.value

    if (this.state.isInLoginMode) {
      isFormValid =
        this.state.inputFieldsData.email.isValid &&
        this.state.inputFieldsData.password.isValid &&
        this.state.inputFieldsData.email.value &&
        this.state.inputFieldsData.password.value
    }

    if (this.state.viewMode === 'portrait') {
      headingText = (
        <MainText>
          <HeadingText>
            {this.state.isInLoginMode ? 'Please Log In' : 'Please Sign Up'}
          </HeadingText>
        </MainText>
      )
    }

    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
        >
          {headingText}
          <ButtonWithBackground
            color="#29aaf4"
            isFormValid="true"
            onPress={this.switchAuthModeHandler}
          >
            {this.state.isInLoginMode ? 'Switch To Sign Up' : 'Switch To Login'}
          </ButtonWithBackground>
          <View style={styles.inputContainer}>
            <DefaultInput
              placeholder="Enter your email"
              value={this.state.inputFieldsData.email.value}
              onChangeText={value => this.inputHandler(value, 'email')}
              isValid={this.state.inputFieldsData.email.isValid}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
            />

            <View
              style={
                this.state.viewMode === 'portrait'
                  ? styles.passwordContainerPortrait
                  : styles.passwordContainerLandscape
              }
            >
              <View
                style={
                  this.state.viewMode === 'portrait' || this.state.isInLoginMode
                    ? styles.passwordWrapperPortrait
                    : styles.passwordWrapperLandscape
                }
              >
                <DefaultInput
                  placeholder="Password"
                  onChangeText={value => this.inputHandler(value, 'password')}
                  secureTextEntry
                  isValid={this.state.inputFieldsData.password.isValid}
                  value={this.state.inputFieldsData.password.value}
                />
              </View>

              {this.state.isInLoginMode ? null : (
                <View
                  style={
                    this.state.viewMode === 'portrait'
                      ? styles.passwordWrapperPortrait
                      : styles.passwordWrapperLandscape
                  }
                >
                  <DefaultInput
                    placeholder="Confirm Password"
                    secureTextEntry
                    onChangeText={value =>
                      this.inputHandler(
                        value,
                        'confirmPassword',
                        this.state.inputFieldsData.password.value
                      )
                    }
                    isValid={this.state.inputFieldsData.confirmPassword.isValid}
                    value={this.state.inputFieldsData.confirmPassword.value}
                  />
                </View>
              )}
            </View>
          </View>

          <ButtonWithBackground
            onPress={this.loginHandler}
            color="#29aaf4"
            isFormValid={isFormValid}
          >
            Submit
          </ButtonWithBackground>
        </KeyboardAvoidingView>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputContainer: {
    width: '80%'
  },
  backgroundImage: {
    width: '100%',
    flex: 1
  },
  passwordContainerPortrait: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },

  passwordContainerLandscape: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  passwordWrapperPortrait: {
    width: '100%'
  },
  passwordWrapperLandscape: {
    width: '45%'
  }
})

const mapDispatchToProps = dispath => {
  return {
    onLogin: authData => dispath(tryAuth(authData))
  }
}

export default connect(null, mapDispatchToProps)(AuthScreen)
