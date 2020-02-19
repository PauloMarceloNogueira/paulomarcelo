import React from "react"
import { graphql } from "gatsby"
import Layout from "../containers/Layout"
import { Container, Content, Title } from "./styles"
import Comments from "../components/Comments"
import PostImage from "../components/PostImage"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <Container>
        <PostImage name={post.frontmatter.thumbnail} />
        <Content>
          <Title>{post.frontmatter.title}</Title>
          <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        </Content>
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
        thumbnail
      }
      html
    }
  }
`
export default BlogPost
