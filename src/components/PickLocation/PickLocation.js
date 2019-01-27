import React from 'react'
import { Button, Text, StyleSheet, Dimensions } from 'react-native'
import styled from 'styled-components'
import MapView from 'react-native-maps'

class PickLocation extends React.Component {

  state = {
    focusedLocation: {
      latitude: 37.7900352,
      longitude: -122.4013726,
      latitudeDelta: 0.0122,
      longitudeDelta: Dimensions.get('window').width / Dimensions.get('window').height * 0.0122
    }
  }
  render() {
    return (
      <MainContainer>
        <MapView
          initialRegion={this.state.focusedLocation}
          style={styles.map}
        />
        <ButtonView>
          <Button title='Locate Me' onPress={() => alert('Pick Location')} />
        </ButtonView>
      </MainContainer>
    )
  }
}


const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: 250
  }
})

const MainContainer = styled.View`
  width: 100%;
  align-items: center;
`

const TextContainer = styled.View`
  border-width: 1;
  border-color: black;
  background-color: #eee;
  width: 80%;
  height: 150;
`

const ButtonView = styled.View`
  margin: 8px;
`

export default PickLocation
