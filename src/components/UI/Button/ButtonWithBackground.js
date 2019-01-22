import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styled from 'styled-components'

const ButtonWithBackground = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <StyledView {...props}>
        <Text>
          {props.children}
        </Text>
      </StyledView>
    </TouchableOpacity>
  )
}

const StyledView = styled.View`
    padding: 10px;
    margin: 5px;
    border-radius: 5px;
    border-width: 1px;
    border-color: black;
    background-color:${props => props.color};
`

export default ButtonWithBackground
