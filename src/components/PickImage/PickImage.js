import React from 'react'
import { Button } from 'react-native'
import styled from 'styled-components'
import ImagePicker from 'react-native-image-picker'

class PickImage extends React.Component {

  state = {
    pickedImage: null
  }

  pickImageHandler = () => {
    ImagePicker.showImagePicker({ title: 'Pick Image' }, res => {
      if (res.didCancel) {
        console.log('Canceled by User');
      } else if (res.error) {
        console.log('Error', res.error)
      } else {
        console.log(res.uri)
        this.setState({
          pickedImage: { uri: res.uri }
        })
        this.props.imagePickedHandler({
          uri:res.uri,
          base64:res.data
        })
      }
    })
  }



  render() {
    return (
      <MainContainer>
        <ContainerImage source={this.state.pickedImage} />
        <ButtonView>
          <Button title='Pick Image' onPress={this.pickImageHandler} />
        </ButtonView>
      </MainContainer >
    )
  }
}

const MainContainer = styled.View`
  width: 100%;
  align-items: center;
`

const ContainerImage = styled.Image`
  border-width: 1;
  border-color: black;
  width: 80%;
  height: 150;
`

const ButtonView = styled.View`
  margin: 8px;
`

export default PickImage
