import React, { Component } from 'react'
import { View,Button,StyleSheet,ImageBackground } from 'react-native'
import startMainTabs from '../MainTabs/startMainTabs'
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'
import HeadingText from '../../components/UI/HeadingText/HeadingText'
import MainText from '../../components/UI/MainText/MainText'
import backgroundImage from '../../assets/background.jpg'
import ButtonWithBackground from '../../components/UI/Button/ButtonWithBackground'

 class AuthScreen extends Component {

  loginHandler = () => { 
    startMainTabs()
  }

  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
       <View style={styles.container}>
          <MainText>
           <HeadingText>Please Log In</HeadingText>
          </MainText>
           <ButtonWithBackground color='#29aaf4'>Switch to Login</ButtonWithBackground >
           <View style={styles.inputContainer}>
            <DefaultInput placeholder='Enter your email'/>
            <DefaultInput placeholder='Password' />
            <DefaultInput placeholder='Confirm Password' />
           </View>
           <ButtonWithBackground onPress={this.loginHandler} color='#29aaf4'>Login</ButtonWithBackground >
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
  }
})

export default AuthScreen
