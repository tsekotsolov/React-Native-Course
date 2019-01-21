import React, { Component } from 'react'
import { Text, Dimensions } from 'react-native'
import styled from 'styled-components'

class SideDrawer extends Component {
  render () {
    return (
      <StyledSideDrawer>
        <Text>SideDrawer</Text>
      </StyledSideDrawer>
    )
  }
}

const StyledSideDrawer = styled.View`
    padding-top: 22;
    background-color: white;
    flex: 1;
    width:${Dimensions.get('window').width * 0.8};
`

export default SideDrawer
