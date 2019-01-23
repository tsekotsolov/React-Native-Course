import React, {Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native'
import {connect} from 'react-redux'
import PlaceList from '../../components/PlaceList/PlaceList'


class FindPlaceScreen extends Component {

    
    static navigatorStyle = {
        navBarButtonColor : 'orange'
    }

    state = {
        placesLoaded: false,
        removeAnimation: new Animated.Value(1),
        placesAnimation: new Animated.Value(0)
    }

    constructor(props){
        super(props)
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent)
    }

    onNavigatorEvent = event => {
        if(event.type ==='NavBarButtonPress'){
            if(event.id === 'sideDrawerToggle'){
                this.props.navigator.toggleDrawer({
                    side:'left',
                })
            }
        }
    }

    itemSelectedHandler = key => {

        const selectedPlace = this.props.places.find(place=>{
            return place.key === key
        })

        this.props.navigator.push({
            screen:'awesome-places.PlaceDetailScreen',
            title:selectedPlace.place,
            passProps:{
                selectedPlace
            }
        })
    }

    placesSearchHandler = () => {
        Animated.timing(this.state.removeAnimation,{
            toValue:0,
            duration:500,
            useNativeDriver: true
        }).start(()=>{
            this.setState({
                placesLoaded:true    
            })
            this.placesLoadedHandler()
        })
    }

    placesLoadedHandler = () =>{
        Animated.timing(this.state.placesAnimation,{
            toValue:1,
            duration:500,
            useNativeDriver:true,
        }).start()
    }

    render() {

        let content = (
            <Animated.View style={{
                opacity:this.state.removeAnimation,
                transform:[
                    {
                        scale:this.state.removeAnimation.interpolate({
                            inputRange:[0, 1],
                            outputRange:[12,1]
                        })
                    }
                ]
            }}>
                <TouchableOpacity onPress={this.placesSearchHandler}>
                    <View style={styles.searchButton}>
                        <Text style={styles.searchButtonText}>Find Places</Text>
                    </View>
                </TouchableOpacity>
            </Animated.View>
        )

        if(this.state.placesLoaded){
            content = (
                <Animated.View style={{
                    opacity:this.state.placesAnimation
                }}>
                    <PlaceList places={this.props.places} selectPlace={this.itemSelectedHandler}/>
                </Animated.View>          
            )
        }

        return  <View style={this.state.placesLoaded ? null : styles.butonContainerStyle}>{content}</View>
    }
}

const mapStateToProps = state => {
    return {
        places:state.places.places
    }
}

const styles = StyleSheet.create({
    searchButton:{
        borderColor:'orange',
        borderWidth:3,
        borderRadius:20,
        padding:20
    },
    searchButtonText:{
        color:'orange',
        fontWeight:'bold',
        fontSize:26
    },
    butonContainerStyle:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default connect(mapStateToProps) (FindPlaceScreen)


