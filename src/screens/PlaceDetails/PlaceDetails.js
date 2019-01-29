import React from 'react'
import { View, TouchableOpacity, Platform, Dimensions } from 'react-native'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import { deletePlace } from '../../store/actions/index'
import MapView from 'react-native-maps'

class PlaceDetails extends React.Component {
  placeDeletedHandler = () => {
    this.props.onDeletePlace(this.props.selectedPlace.key)
    this.props.navigator.pop()
  }

  render() {
    return (
      <StyledScrollView>
        <View>
          <StyledText>{this.props.selectedPlace.place}</StyledText>
          <StyledImage source={this.props.selectedPlace.image} />
        </View>

        <View>
          <Map
            initialRegion={{
              ...this.props.selectedPlace.location,
              latitudeDelta: 0.0122,
              longitudeDelta:
                Dimensions.get('window').width /
                Dimensions.get('window').height *
                0.0122
            }}
          >
            <MapView.Marker coordinate={this.props.selectedPlace.location} />
          </Map>
        </View>

        <IconView>
          <StyledTouchableOpacity onPress={this.placeDeletedHandler}>
            <StyledIconView>
              <Icon
                size={30}
                name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
                color="red"
              />
            </StyledIconView>
          </StyledTouchableOpacity>
        </IconView>
      </StyledScrollView>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: key => {
      dispatch(deletePlace(key))
    }
  }
}

const StyledTouchableOpacity = styled.TouchableOpacity`
  width: 30px;
`

const IconView = styled.View`
  align-items: center;
`
const Map = styled(MapView)`
  height: 200px;
`
const StyledImage = styled.Image`
  height: 200px;
`
const StyledIconView = styled.View`
  align-items: center;
`
const StyledScrollView = styled.ScrollView`
  margin: 22px;
`
const StyledText = styled.Text`
  font-weight: bold;
  text-align: center;
  font-size: 27px;
`

export default connect(null, mapDispatchToProps)(PlaceDetails)
