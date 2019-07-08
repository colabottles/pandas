import React from "react"
import styled from "styled-components"

const Wrapper = styled.wrapper`
  background-color: rebeccapurple;
  margin: 3rem auto;
  max-width: 600px;
`

const Layout = () => {
  return (
    // add a stable CSS class
    <Wrapper className={`wrapper`}>
      
    </Wrapper>
  )
}