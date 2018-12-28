import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native'

const ListItem = props => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.item} >
      <Image source={props.placeImage} style={styles.placeImage} />
      <Text>{props.place}</Text>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  item: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center'
  },
  placeImage: {
    marginRight: 8,
    height: 30,
    width: 30 }
})

export default ListItem
