import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "./styles"

export default function PostImage({ name }) {
  console.log(name, "NAME")
  const imageName = name ? name.split("/img/")[1] : "dsdsds.jpg"
  console.log(imageName)
  const query = useStaticQuery(
    graphql`
      query Image($name: String) {
        file(relativePath: { eq: $name }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `,
    {
      name: imageName,
    }
  )
  console.log(query, "QUERYs")
  return (
    <Container>
      <Img fluid={query.file.childImageSharp.fluid} />
    </Container>
  )
}
