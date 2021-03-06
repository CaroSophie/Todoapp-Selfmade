import React, { Component } from 'react'
import styled from 'styled-components'

const Heading = styled.h1`
  text-align: center;
  color: lightgrey;
  font-size: 2em;
  letter-spacing: -1px;
  border: 2px solid white;
  font-weight: bold;
  margin: 10px;
  margin-top: 15px;
  margin-bottom: 20px;
`

class Header extends Component {
  render() {
    return <Heading>To do list</Heading>
  }
}

export default Header
