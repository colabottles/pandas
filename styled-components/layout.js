import React from 'react'
import { styled } from 'styled-components'

const MegaHeader = styled.header`
    background-color: rebeccapurple;	
`
const Layout = () => {
  return (
    // add a stable CSS class
    <MegaHeader className={`site-wrap`}>
      <h1>My Gatsby Site</h1>
    </MegaHeader>
  )	
}