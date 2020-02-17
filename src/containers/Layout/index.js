import React from "react"

import { Container } from "./styles"
import Header from "../../components/Header"
import { useStaticQuery } from "gatsby"

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
      <Header data={data} />
      {children}
    </Container>
  )
}

export default Layout
