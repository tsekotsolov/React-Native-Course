import React from 'react'
import { TouchableOpacity, Text, TouchableNativeFeedback, Platform } from 'react-native'
import styled from 'styled-components'

const ButtonWithBackground = props => {
  const content = (
    <StyledView {...props}>
      <Text>
        {props.children}
      </Text>
    </StyledView>
  )

  if (!props.isFormValid) {
    return content
  } else {
    if (Platform.OS === 'android') {
      return (
        <TouchableNativeFeedback onPress={props.onPress}>
          {content}
        </TouchableNativeFeedback>
      )
    }
    return (
      <TouchableOpacity onPress={props.onPress}>
        {content}
      </TouchableOpacity>
    )
  }
}

const StyledView = styled.View`
    padding: 10px;
    margin: 5px;
    border-radius: 5px;
    border-width: 1px;
    border-color: ${props => props.isFormValid ? 'black' : '#eee'};
    background-color:${props => props.isFormValid ? props.color : '#eee'};
`

export default ButtonWithBackground
