import React, { Component } from 'react'
import { Text, Dimensions, TouchableOpacity, Platform } from 'react-native'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/Ionicons'

class SideDrawer extends Component {
  render () {
    return (
      <StyledSideDrawer>
        <TouchableOpacity>
          <DrawerItem>
            <DrawerItemIcon name={Platform.OS === 'android' ? 'md-log-out' : 'ios-log-out'} size={30} />
            <Text>Sign out</Text>
          </DrawerItem>
        </TouchableOpacity>
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

const DrawerItem = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: #eee;
    padding:15px;
`

const DrawerItemIcon = styled(Icon)`
    margin-right: 15px;
    color:red;
`

export default SideDrawer
