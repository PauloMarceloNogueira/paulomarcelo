import React from "react"

import { Container } from "./styles"
import Header from "../../components/Header"
import { useStaticQuery } from "gatsby"
import { TransitionPortal } from "gatsby-plugin-transition-link"
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          subtitle
        }
      }
    }
  `)
  return (
    <Container>
      <TransitionPortal level="top">
        <Header data={data} />
      </TransitionPortal>
      {children}
    </Container>
  )
}

export default Layout
