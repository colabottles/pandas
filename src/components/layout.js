import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import { styled } from "../components/container.js"

const Wrapper = styled.wrapper`
  background-color: rebeccapurple;
  color: #fff;
`
const Layout = () => {
  return (
    // adding a CSS class for a user stylesheet hook
    <Wrapper className={`wrapper`}>
      <h1>My Site</h1>
    </Wrapper>
  )
}

const mountNode = document.querySelector('div')
ReactDOM.render(<Layout />, mountNode)

export default ({ children }) => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
  `)
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <Link
        to={`/about/`}
        css={css`
          float: right;
        `}
      >
        About
      </Link>
      {children}
    </div>
  )
}