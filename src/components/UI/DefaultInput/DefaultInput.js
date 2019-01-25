import React from 'react'
import styled from 'styled-components'

const DefaultInput = props => <StyledInput {...props} />

const StyledInput = styled.TextInput`
  width: 100%;
  border: 1px solid;
  border-color: ${props => (props.isValid ? '#eee' : 'red')};
  background-color: ${props => (props.isValid ? 'white' : '#f9c0c0')};
  padding: 5px;
  margin-top: 8px;
  margin-bottom: 8px;
`

export default DefaultInput
