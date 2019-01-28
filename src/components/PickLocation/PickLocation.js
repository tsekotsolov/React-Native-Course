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
      longitudeDelta:
        Dimensions.get('window').width /
        Dimensions.get('window').height *
        0.0122
    },
    locationChosen: false
  }

  pickLocationHandler = event => {
    const coords = event.nativeEvent

    this.map.animateToRegion({
      ...this.state.focusedLocation,
      latitude: coords.coordinate.latitude,
      longitude: coords.coordinate.longitude,
    })

    this.setState(prevState => {
      return {
        focusedLocation: {
          ...prevState.focusedLocation,
          latitude: coords.coordinate.latitude,
          longitude: coords.coordinate.longitude,
        },
        locationChosen: true
      }
    })

    this.props.locationPickHandler({
      latitude: coords.coordinate.latitude,
      longitude: coords.coordinate.longitude,
    })
  }

  getLocationHandler = _ => {
    navigator.geolocation.getCurrentPosition(pos => {

      const coordsEvent = {
        nativeEvent: {
          coordinate: {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          },
        }
      }

      this.pickLocationHandler(coordsEvent)
    }, err => {
      console.log(err)
      alert('Fetching the position failed! Pick one manually!')
    })
  }

  render() {
    let marker = null
    if (this.state.locationChosen) {
      marker = <MapView.Marker coordinate={this.state.focusedLocation} />
    }
    return (
      <MainContainer>
        <Map
          initialRegion={this.state.focusedLocation}
          onPress={this.pickLocationHandler}
          ref={ref => { this.map = ref }}
        >
          {marker}
        </Map>
        <ButtonView>
          <Button title="Locate Me" onPress={this.getLocationHandler} />
        </ButtonView>
      </MainContainer>
    )
  }
}

const Map = styled(MapView)`
  width: 100%;
  height: 250px;
`

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
