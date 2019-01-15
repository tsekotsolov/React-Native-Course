import React, {Component} from 'react'
import { connect } from 'react-redux'
import {addPlace, deletePlace, selectPlace, deselectPlace} from './src/store/actions/index'
import PlaceInput from './src/components/PlaceInput/PlaceInput'
import PlaceList from './src/components/PlaceList/PlaceList'
import PlaceDetails from './src/components/PlaceDetails/PlaceDetails'
import styled from 'styled-components'

 class App extends Component {

  addPlaces = place => {
  this.props.onAddPlace(place)
  console.log('Place added')
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
      <StyledView>
       <PlaceDetails 
       selectedPlace={this.props.selectedPlace}
       onModalClose ={this.onModalClose}
       onItemDelete={this.onItemDelete}
       />  
        <PlaceInput addPlaces={this.addPlaces} />
        <PlaceList places={this.props.places} selectPlace={this.selectPlace}/>
      </StyledView>
    )
  }
}

const StyledView = styled.View`
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    background-color: #F5FCFF;
    padding-top:20;
`

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