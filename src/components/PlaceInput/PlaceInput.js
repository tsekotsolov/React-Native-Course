import React, { Component } from 'react'
import {Button} from 'react-native'
import styled from 'styled-components'
import DefaultInput from '../UI/DefaultInput/DefaultInput'

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
      <Container>
        <DefaultInput
          placeholder='Add awesome place...'
          onChangeText={this.onChangeInputHandler}
          value={place}
          isValid={true}
        />
        <Button title='Add Place' disabled={place.length<6} onPress = { _ =>{
           place !== '' &&
                this.props.addPlaces(place)
                this.setState({
                    place:''
                })
        }} />
      </Container>
    )
  }
}

const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    margin:70px;
` 

const StyledInput = styled.TextInput`
   height: 40px;
   width: 80%;
`

export default PlaceInput
