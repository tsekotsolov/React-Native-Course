import React from 'react'
import { View, Modal, Button, TouchableOpacity} from 'react-native'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/Ionicons'

const PlaceDetails = props => {
  let modalContent = null

  if (props.selectedPlace) {
    modalContent = (
      <View>
        <StyledImage source={props.selectedPlace.image} />
        <StyledText>{props.selectedPlace.place}</StyledText>
      </View>
    )
  }

  return (
    <Modal visible={props.selectedPlace !== null} animationType='slide' onRequestClose={props.onModalClose}>
      <StyledView >
        {modalContent}
        <FlexView>
          <TouchableOpacity>
              <StyledIconView>
                <Icon size={30} name='ios-trash' color='red' onPress={() => props.onItemDelete(props.selectedPlace.key)}/>
              </StyledIconView>
            </TouchableOpacity>
            <TouchableOpacity>
            <StyledIconView>
                <Icon size={30} name='ios-close' color='blue' onPress={props.onModalClose}/>
              </StyledIconView>
            </TouchableOpacity>

          {/* <Button title='Close' onPress={props.onModalClose} />
          <Button title='Delete' color='red' onPress={() => props.onItemDelete(props.selectedPlace.key)} />
           */}
        </FlexView>
      </StyledView>
    </Modal>
  )
}

const StyledImage = styled.Image`
    width: 100%;
    height: 200px;
`

const FlexView = styled.View`
    display:flex;
    flex-direction: row;
    justify-content: space-around;
`

const StyledIconView = styled.View`
  align-items: center;
`
const StyledView = styled.View `
margin: 22px;
`

const StyledText = styled.Text`
    font-weight: bold;
    text-align: center;
    font-size: 27px;
`



export default PlaceDetails
