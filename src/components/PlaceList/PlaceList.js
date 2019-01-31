import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import ListItem from '../ListItem/ListItem'

const PlaceList = props => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.places}
      renderItem={({ item }) => (
        <ListItem
          place={item.name}
          placeImage={item.image}
          onItemPressed={() => props.selectPlace(item.id)}
        />
      )}
    />
  )
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
    padding: 25
  }
})

export default PlaceList
