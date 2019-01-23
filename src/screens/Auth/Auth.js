import React, { Component } from 'react'
import { View, Dimensions, StyleSheet, ImageBackground } from 'react-native'
import startMainTabs from '../MainTabs/startMainTabs'
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'
import HeadingText from '../../components/UI/HeadingText/HeadingText'
import MainText from '../../components/UI/MainText/MainText'
import backgroundImage from '../../assets/background.jpg'
import ButtonWithBackground from '../../components/UI/Button/ButtonWithBackground'

 class AuthScreen extends Component {

  state = {
    viewMode:Dimensions.get('window').height>500 ? 'portrait' : 'landscape'
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
    startMainTabs()
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
           <ButtonWithBackground color='#29aaf4'>Switch to Login</ButtonWithBackground >
           <View style={styles.inputContainer}>
            <DefaultInput placeholder='Enter your email'/>
            <View style={this.state.viewMode==='portrait'
              ? styles.passwordContainerPortrait
              : styles.passwordContainerLandscape
            }>
              <View style={this.state.viewMode==='portrait'
                ? styles.passwordWrapperPortrait
                :styles.passwordWrapperLandscape
              }>
                <DefaultInput placeholder='Password' />
              </View>
              <View style={this.state.viewMode==='portrait'
                ? styles.passwordWrapperPortrait
                :styles.passwordWrapperLandscape
              }>  
                <DefaultInput placeholder='Confirm Password' />
              </View>
            </View>
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

export default AuthScreen
