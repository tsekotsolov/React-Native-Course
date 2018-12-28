import React, { Component } from 'react'
import {StyleSheet, View, TextInput, Button} from 'react-native'

class PlaceInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      place: ''
    }
  }

  onChangeInputHandler = value => {
    this.setState({
      place:value,
    })
  }

  render () {
      const {place} = this.state

    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Add awesome place...'
          onChangeText={this.onChangeInputHandler}
          value={place}
        />
        <Button title='Add' onPress={ _ =>{
           place !== '' &&
                this.props.addPlaces(place)
                this.setState({
                    place:''
                })
        }} />
      </View>
    )
  }
}

const styles = StyleSheet.create({

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    
  },
  input: {
    height: 40,
    width: 300,
  }
})
export default PlaceInput
