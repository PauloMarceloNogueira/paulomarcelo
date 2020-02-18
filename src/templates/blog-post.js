import React from "react"

import { graphql } from "gatsby"
import Layout from "../containers/Layout"
import { Container } from "./styles"
import Comments from "../components/Comments"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <Container>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </Container>
      <Comments
        title={post.frontmatter.title}
        url={post.fields.slug}
      ></Comments>
    </Layout>
  )
}
export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
      html
    }
  }
`
export default BlogPost
