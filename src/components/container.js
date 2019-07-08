import React from "react"
import styled from "styled-components"

const Wrapper = styled.wrapper`
  margin: 3rem auto;
  max-width: 600px;
`

export default ({ children }) => (
  <Wrapper className={`wrapper`}>{children}</Section>
)