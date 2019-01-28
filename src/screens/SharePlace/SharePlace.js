import React, { Component } from 'react'
import { ScrollView, Button } from 'react-native'
import { connect } from 'react-redux'
import { addPlace } from '../../store/actions/index'
import styled from 'styled-components'
import MainText from '../../components/UI/MainText/MainText'
import HeadingText from '../../components/UI/HeadingText/HeadingText'
import PickImage from '../../components/PickImage/PickImage'
import PickLocation from '../../components/PickLocation/PickLocation'
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'

class SharePlaceScreen extends Component {
  static navigatorStyle = {
    navBarButtonColor: 'orange'
  }

  constructor(props) {
    super(props)
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent)
  }

  state = {
    location: {
      value: null,
      isValid: false
    },
    place: ''
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

  placesAddedHandler = (placeName) => {
    this.props.onAddPlace(placeName)
  }

  locationPickHandler = location => {
    this.setState(prevState => {
      return {
        location: {
          ...prevState.location,
          value: location,
          isValid: true
        }
      }
    })
  }

  onChangeInputHandler = value => {
    this.setState({
      place: value
    })
  }

  render() {
    return (
      <ScrollView>
        <Container>
          <MainText>
            <HeadingText>Share a place with us!</HeadingText>
          </MainText>
          <PickImage />
          <PickLocation locationPickHandler={this.locationPickHandler} />
          <InputContainer>
            <DefaultInput
              placeholder="Add awesome place..."
              onChangeText={this.onChangeInputHandler}
              value={this.state.place}
              isValid={true}
            />
            <Button
              title="Add Place"
              disabled={this.state.place.length < 3 || !this.state.location.isValid}
              onPress={_ => {
                this.state.place !== '' && this.placesAddedHandler(this.state.place)
                this.setState({
                  place: ''
                })
              }}
            />
          </InputContainer>
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

const InputContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 70px;
`

const StyledInput = styled.TextInput`
  height: 40px;
  width: 80%;
`

export default connect(null, mapDispatchToProps)(SharePlaceScreen)
