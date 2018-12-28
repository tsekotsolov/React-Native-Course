import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import ListItem from './src/components/ListItem/ListItem'
import PlaceInput from './src/components/PlaceInput/PlaceInput'
import PlaceList from './src/components/PlaceList/PlaceList'
import placeImage from './src/assets/beautiful-place.jpg'
import PlaceDetails from './src/components/PlaceDetails/PlaceDetails'

export default class App extends Component {
  state = {
    places:[],
    selectedPlace:null
  }

  addPlaces = place => {
    this.setState(prevState => (
      {
        places:[...prevState.places, 
          {
            key:Math.random().toString(),
            place:place,
            image:placeImage
          }]
      }
    ))
}

  selectPlace = key =>{
    this.setState(prevState=>{
      return{
        selectedPlace:prevState.places.find(place=>{
          return place.key===key
        })
      }
    })
  }

  onModalClose  = _ => {
    this.setState({
      selectedPlace:null,
      
    })
  }

  onItemDelete  = key => {
    this.setState(prevState => {
          return{
            places:prevState.places.filter(place=>{
              return place.key!==key
            }),
            selectedPlace:null
          }
        })
  }

  render() {
    return (
      <View style={styles.container}>
       <PlaceDetails 
       selectedPlace={this.state.selectedPlace}
       onModalClose ={this.onModalClose}
       onItemDelete={this.onItemDelete}
       />  
        <PlaceInput addPlaces={this.addPlaces} />
        <PlaceList places={this.state.places} selectPlace={this.selectPlace}/>
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
