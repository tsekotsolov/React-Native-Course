import React from 'react'
import { View, TouchableOpacity, Platform } from 'react-native'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import { deletePlace } from '../../store/actions/index'

class PlaceDetails extends React.Component {
  placeDeletedHandler = () => {
    this.props.onDeletePlace(this.props.selectedPlace.key)
    this.props.navigator.pop()
  }

  render() {
    return (
      <StyledView>
        <View>
          <StyledImage source={this.props.selectedPlace.image} />
          <StyledText>{this.props.selectedPlace.place}</StyledText>
        </View>

        <TouchableOpacity onPress={this.placeDeletedHandler}>
          <StyledIconView>
            <Icon
              size={30}
              name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
              color="red"
            />
          </StyledIconView>
        </TouchableOpacity>
      </StyledView>
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

const StyledImage = styled.Image`
  width: 100%;
  height: 200px;
`
const StyledIconView = styled.View`
  align-items: center;
`
const StyledView = styled.View`
  margin: 22px;
`
const StyledText = styled.Text`
  font-weight: bold;
  text-align: center;
  font-size: 27px;
`

export default connect(null, mapDispatchToProps)(PlaceDetails)
