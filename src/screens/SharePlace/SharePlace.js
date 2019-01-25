import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'
import PlaceInput from '../../components/PlaceInput/PlaceInput.js'
import { addPlace } from '../../store/actions/index'
import styled from 'styled-components'
import MainText from '../../components/UI/MainText/MainText'
import HeadingText from '../../components/UI/HeadingText/HeadingText'
import PickImage from '../../components/PickImage/PickImage'
import PickLocation from '../../components/PickLocation/PickLocation'

class SharePlaceScreen extends Component {
  static navigatorStyle = {
    navBarButtonColor: 'orange'
  }

  constructor(props) {
    super(props)
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent)
  }

  onNavigatorEvent = event => {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'sideDrawerToggle') {
        this.props.navigator.toggleDrawer({
          side: 'left'
        })
      }
    }
  }

  placesAddedHandler = placeName => {
    this.props.onAddPlace(placeName)
  }

  render() {
    return (
      <ScrollView>
        <Container>
          <MainText>
            <HeadingText>Share a place with us!</HeadingText>
          </MainText>
          <PickImage />
          <PickLocation />
          <PlaceInput addPlaces={this.placesAddedHandler} />
        </Container>
      </ScrollView>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: placeName => dispatch(addPlace(placeName))
  }
}

const Container = styled.View`
  flex: 1;
  align-items: center;
`

export default connect(null, mapDispatchToProps)(SharePlaceScreen)
