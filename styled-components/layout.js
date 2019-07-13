import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"

const SiteWrapper = styled.wrapper`
    background-color: rebeccapurple;
`
	
const Layout = () => {
  return (
    // add a stable CSS class
    <SiteWrapper className={`wrapper`}>
      <h1>My Gatsby Site</h1>
    </SiteWrapper>
  )
}