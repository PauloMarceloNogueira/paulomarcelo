import React from "react"

import { Container } from "./styles"
import Header from "../../components/Header"
import { useStaticQuery } from "gatsby"
import MainContent from "../../components/MainContent"

const Layout = () => {
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
      <MainContent />
    </Container>
  )
}

export default Layout
