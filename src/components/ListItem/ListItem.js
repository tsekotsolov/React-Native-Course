import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

const ListItem = props => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <StyledView primary>
      <StyledImage source={props.placeImage} />
      <Text>{props.place}</Text>
    </StyledView >
  </TouchableOpacity>
)

const StyledView = styled.View`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    background-color: ${props => props.primary ? 'white' : 'palevioletred'};
    flex-direction: row;
    align-items: center;
`

const StyledImage = styled.Image`
    margin-right: 8px;
    height: 30px;
    width: 30px;
`

export default ListItem
