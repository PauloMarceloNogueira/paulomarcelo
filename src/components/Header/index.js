import React from "react"
import Img from "gatsby-image"
import {
  Content,
  Container,
  Avatar,
  TitleContent,
  Title,
  Subtitle,
  Row,
  AuxContainer,
} from "./styles"
import { graphql, useStaticQuery } from "gatsby"
import Menu from "../Menu"

export default function Header({
  data: {
    site: { siteMetadata },
  },
}) {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "avatar/avatar.jpeg" }) {
          childImageSharp {
            fixed(width: 50, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )
  console.log("DATA", siteMetadata)
  return (
    <Content>
      <Container>
        <Row>
          <Avatar>
            <Img
              fixed={avatarImage.childImageSharp.fixed}
              style={{ borderRadius: 50 }}
            />
          </Avatar>
          <TitleContent>
            <Title>{siteMetadata.title}</Title>
            <Subtitle>{siteMetadata.subtitle}</Subtitle>
          </TitleContent>
        </Row>
        <Menu />
      </Container>
      <AuxContainer />
    </Content>
  )
}
