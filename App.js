import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import { connect } from 'react-redux'
import {addPlace, deletePlace, selectPlace, deselectPlace} from './src/store/actions/index'
import ListItem from './src/components/ListItem/ListItem'
import PlaceInput from './src/components/PlaceInput/PlaceInput'
import PlaceList from './src/components/PlaceList/PlaceList'
import placeImage from './src/assets/beautiful-place.jpg'
import PlaceDetails from './src/components/PlaceDetails/PlaceDetails'

 class App extends Component {
  

  addPlaces = place => {
  this.props.onAddPlace(place)
}

  selectPlace = key =>{
   this.props.onSelectPlace(key)
  }

  onModalClose  = _ => {
   this.props.onDeselectPlace()
  }

  onItemDelete  = key => {
   this.props.onDeletePlace(key)
  }

  render() {
    return (
      <View style={styles.container}>
       <PlaceDetails 
       selectedPlace={this.props.selectedPlace}
       onModalClose ={this.onModalClose}
       onItemDelete={this.onItemDelete}
       />  
        <PlaceInput addPlaces={this.addPlaces} />
        <PlaceList places={this.props.places} selectPlace={this.selectPlace}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop:20,
  }
})

const mapStateToprops = state => {
  return {
    places:state.places.places,
    selectedPlace:state.places.selectedPlace,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: place => dispatch(addPlace(place)),
    onDeletePlace:key => dispatch(deletePlace(key)),
    onSelectPlace: key => dispatch(selectPlace(key)),
    onDeselectPlace: _ => dispatch(deselectPlace())
  }
}

export default connect(mapStateToprops,mapDispatchToProps)(App)