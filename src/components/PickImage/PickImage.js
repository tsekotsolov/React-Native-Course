import React from 'react'
import { Button } from 'react-native'
import imagePlaceholder from '../../assets/beautiful-place.jpg'
import styled from 'styled-components'

const PickImage = () => {
  return (
    <MainContainer>
      <ContainerImage source={imagePlaceholder} />
      <ButtonView>
        <Button title='Pick Image' onPress={() => alert('Pick Image')} />
      </ButtonView>
    </MainContainer>
  )
}

const MainContainer = styled.View`
    width:100%;
    align-items:center;
`

const ContainerImage = styled.Image`
    border-width:1;
    border-color:black;
    width:80%;
    height:150;
`

const ButtonView = styled.View`
    margin:8px;
`

export default PickImage
