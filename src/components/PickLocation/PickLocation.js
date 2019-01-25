import React from 'react'
import { Button, Text } from 'react-native'
import styled from 'styled-components'

const PickLocation = () => {
  return (
    <MainContainer>
      <TextContainer>
        <Text>Map</Text>
      </TextContainer>
      <ButtonView>
        <Button title="Locate Me" onPress={() => alert('Pick Location')} />
      </ButtonView>
    </MainContainer>
  )
}

const MainContainer = styled.View`
  width: 100%;
  align-items: center;
`

const TextContainer = styled.View`
  border-width: 1;
  border-color: black;
  background-color: #eee;
  width: 80%;
  height: 150;
`

const ButtonView = styled.View`
  margin: 8px;
`

export default PickLocation
