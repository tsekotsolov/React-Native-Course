import React from 'react'
import {Text, View, StyleSheet, Image, Modal, Button} from 'react-native'

const PlaceDetails = props => {
  let modalContent = null

  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image source={props.selectedPlace.image} style={styles.placeImage} />
        <Text style={styles.placeText}>{props.selectedPlace.place}</Text>
      </View>
    )
  }

  
  return (
    <Modal visible={props.selectedPlace !== null} animationType='slide' onRequestClose={props.onModalClose}>
      <View style={styles.modalContiner} >
        {modalContent}
        <View>
          <Button title='Close' onPress={props.onModalClose} />
          <Button title='Delete' color='red' onPress={() => props.onItemDelete(props.selectedPlace.key)} />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({

  modalContiner: {
    margin: 22
  },
  placeImage: {
    width: '100%',
    height: 200
  },
  placeText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 27

  }
})

export default PlaceDetails
