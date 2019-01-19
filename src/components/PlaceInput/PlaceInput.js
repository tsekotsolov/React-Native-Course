import React, { Component } from 'react'
import {StyleSheet, TextInput, Button} from 'react-native'
import styled from 'styled-components'

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
      <InputContainer>
        <StyledInput
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
      </InputContainer>
    )
  }
}


const InputContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin:20px;
` 

const StyledInput = styled.TextInput`
   height: 40px;
   width: 80%;
`

export default PlaceInput
