import React from "react"

import Layout from "../containers/Layout"

import SEO from "../components/seo"
import MainContent from "../components/MainContent"

const IndexPage = () => (
  <Layout>
    <SEO title="Bem Vindo!" />
    <MainContent />
  </Layout>
)

export default IndexPage
