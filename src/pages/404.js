import React from "react"

import SEO from "../components/seo"
import Layout from "../containers/Layout"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesnt exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
