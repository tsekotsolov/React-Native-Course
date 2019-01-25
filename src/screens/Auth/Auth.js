import React, { Component } from 'react'
import { View, Dimensions, StyleSheet, ImageBackground } from 'react-native'
import startMainTabs from '../MainTabs/startMainTabs'
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'
import HeadingText from '../../components/UI/HeadingText/HeadingText'
import MainText from '../../components/UI/MainText/MainText'
import backgroundImage from '../../assets/background.jpg'
import ButtonWithBackground from '../../components/UI/Button/ButtonWithBackground'
import validateInput from '../../utility/validation'
import {connect} from 'react-redux'
import {tryAuth} from '../../store/actions/index'

 class AuthScreen extends Component {

  state = {
    viewMode:Dimensions.get('window').height>500 ? 'portrait' : 'landscape',
    inputFieldsData: {
      email:{
        value:'',
        isValid:true
      },
      password:{
        value:'',
        isValid:true
      },
      confirmPassword:{
        value:'',
        isValid:true
      },
    }
  }

  onDeviceOrientationChange = _ => {
    this.setState({
      viewMode:Dimensions.get('window').height>500 ?'portrait' : 'landscape'
    })
  }

  componentWillMount(){
    Dimensions.addEventListener('change', this.onDeviceOrientationChange)
  }

  componentWillUnmount(){
    Dimensions.removeEventListener('change', this.onDeviceOrientationChange)
  }

  loginHandler = _ => { 
    const authData = {
      email:this.state.inputFieldsData.email.value,
      password:this.state.inputFieldsData.password.value
    }
    this.props.onLogin(authData)
    startMainTabs()
  }

  inputHandler = (value,fieldType,controlValue) => {

    this.setState(prevState => {
      return {
        inputFieldsData:{
          ...prevState.inputFieldsData,
          confirmPassword:{
            ...prevState.inputFieldsData.confirmPassword,
            isValid: fieldType==='password'
              ?validateInput(prevState.inputFieldsData.confirmPassword.value,'confirmPassword',value)
              :prevState.inputFieldsData.confirmPassword.isValid
          },

          [fieldType]:{
            value:value,
            isValid:validateInput(value,fieldType,controlValue)
          },
        }
      }
    })
  }

  render() {

    let headingText = null

    if(this.state.viewMode==='portrait'){
      headingText=(  
      <MainText>
        <HeadingText>Please Log In</HeadingText>
       </MainText>
       )
    }

    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
       <View style={styles.container}>
          {headingText}
           <ButtonWithBackground color='#29aaf4' isFormValid='true'>Switch to Login</ButtonWithBackground >
           <View style={styles.inputContainer}>

            <DefaultInput 
              placeholder='Enter your email' 
              value={this.state.inputFieldsData.email.value}
              onChangeText={(value)=>this.inputHandler(value,'email')}
              isValid={this.state.inputFieldsData.email.isValid}
              />

            <View style={this.state.viewMode==='portrait'
              ? styles.passwordContainerPortrait
              : styles.passwordContainerLandscape
            }>
              <View style={this.state.viewMode==='portrait'
                ? styles.passwordWrapperPortrait
                :styles.passwordWrapperLandscape
              }>

                <DefaultInput placeholder='Password' 
                  onChangeText={(value)=>this.inputHandler(value,'password')}
                  isValid={this.state.inputFieldsData.password.isValid}/>
              </View>

              <View style={this.state.viewMode==='portrait'
                ? styles.passwordWrapperPortrait
                :styles.passwordWrapperLandscape
              }>  
                <DefaultInput 
                  placeholder='Confirm Password' 
                  onChangeText={(value)=>this.inputHandler(value,'confirmPassword',this.state.inputFieldsData.password.value)} 
                  isValid={this.state.inputFieldsData.confirmPassword.isValid}
                  />
              </View>

            </View>
           </View>

           <ButtonWithBackground 
           onPress={this.loginHandler} 
           color='#29aaf4'
           isFormValid={this.state.inputFieldsData.email.isValid
            && this.state.inputFieldsData.password.isValid
            && this.state.inputFieldsData.confirmPassword.isValid
            &&this.state.inputFieldsData.email.value
            &&this.state.inputFieldsData.password.value
            &&this.state.inputFieldsData.confirmPassword.value
          }
           >Login</ButtonWithBackground >
        </View> 
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({

  container:{
   flex:1,
   alignItems:'center',
   justifyContent:'center'
  },
  inputContainer:{
    width:'80%'
  },
  backgroundImage:{
    width:'100%',
    flex:1
  },
  passwordContainerPortrait:{
    flexDirection: 'column',
    justifyContent:'space-between'
  },

  passwordContainerLandscape:{
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  passwordWrapperPortrait:{
    width: '100%'
  },
  passwordWrapperLandscape:{
    width: '45%',
  }
})

const mapDispatchToProps = dispath => { 
  return {
    onLogin: authData => dispath(tryAuth(authData))
  }
}

export default connect(null,mapDispatchToProps)(AuthScreen)
