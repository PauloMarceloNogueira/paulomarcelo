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
import Anilink from "gatsby-plugin-transition-link/AniLink"
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

  return (
    <Content>
      <Container>
        <Row>
          <Anilink to="/" cover direction="right" bg="#dbbe23" duration={0.6}>
            <Avatar>
              <Img
                fixed={avatarImage.childImageSharp.fixed}
                style={{ borderRadius: 50 }}
              />
            </Avatar>
          </Anilink>
          <TitleContent>
            <Anilink to="/" cover direction="right" bg="#dbbe23" duration={0.6}>
              <Title>{siteMetadata.title}</Title>
            </Anilink>
            <Subtitle>{siteMetadata.subtitle}</Subtitle>
          </TitleContent>
        </Row>
        <Menu />
      </Container>
      <AuxContainer />
    </Content>
  )
}
