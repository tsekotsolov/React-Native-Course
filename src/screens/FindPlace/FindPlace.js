import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'
import PlaceList from '../../components/PlaceList/PlaceList'


class FindPlaceScreen extends Component {

    itemSelectedHandler = key => {

        const selectedPlace = this.props.places.find(place=>{
            return place.key === key
        })

        this.props.navigator.push({
            screen:'awesome-palces.PlaceDetailScreen',
            title:selectedPlace.place,
            passProps:{
                selectedPlace
            }
        })
    }

    render(){
     return(
        <View>
           <PlaceList places={this.props.places} selectPlace={this.itemSelectedHandler}/>          
        </View>
     )
    }
}

const mapStateToProps = state => {

    return {
        places:state.places.places
    }
}

export default connect(mapStateToProps) (FindPlaceScreen)