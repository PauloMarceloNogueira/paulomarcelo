import React from "react"

// import Layout from "../containers/Layout"

import SEO from "../components/seo"
// import MainContent from "../components/MainContent"
// import { Container, Background, Box, Title, Subtitle } from "./styles"
import { useStaticQuery } from "gatsby"
import media from "styled-media-query"
import styled from "styled-components"
const IndexPage = () => {
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile: file(relativePath: { eq: "avatar/avatar.jpeg" }) {
          childImageSharp {
            fixed(width: 960, height: 960) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )
  return (
    <>
      <SEO title="Page two" />
      <Container image={allFile.childImageSharp.fixed.src}>
        <Background>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box op={true} span={3}></Box>
          <Box
            className="boxText"
            justify="flex-end"
            direction="column"
            text={true}
            rowSpan={2}
          >
            <Title mbSize={150} size={300}>
              Paulo
            </Title>
            <Title mbSize={200} size={400}>
              Nogueira
            </Title>
          </Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box op={true} span={1} colored={"#F2DC5D"}></Box>
          <Box className="boxText" justify="flex-end" text={true} span={1}>
            <Subtitle size={180} mbSize={80}>
              frontEnd
            </Subtitle>
          </Box>
          <Box op={true} span={1}></Box>
          <Box op={true} span={1}></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box op={true} span={1}></Box>
          <Box
            text={true}
            className="boxText"
            span={2}
            justify="flex-start"
            align="flex-end"
            direction="column"
          >
            <Title size={380} mbSize={130}>
              DEVELOPER
            </Title>
            <Title size={100} mbSize={60}>
              & illustrator
            </Title>
          </Box>

          <Box op={true} span={2} colored={"#F2DC5D"}></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box op={true} span={1}></Box>
          <Box op={true} span={1}></Box>
          <Box
            text={true}
            className="boxText"
            span={2}
            justify="center"
            align="flex-start"
            direction="column"
          >
            {/* <Title size={12} onClick={e => nextImage()}>
          Próxima
        </Title>
        <Title size={12} onClick={e => prevImage()}>
          Anterior
        </Title> */}
          </Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box op={true} span={4}></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box op={true} span={1}></Box>
          <Box></Box>
          <Box op={true} span={2}></Box>
        </Background>
      </Container>
    </>
  )
}

export default IndexPage

export const Container = styled.div`
  background-color: #fff;
  transition: background-image 0.2s ease;
  background-repeat: no-repeat;
  background-image: url(${props => props.image});
  background-size: 60vw;
  background-position: center 0vw;
  ${media.lessThan("medium")`margin-top: 40%;`}
`
export const Background = styled.div`
  display: grid;
  grid-gap: 1vw;
  grid-template-rows: 5vw;
  grid-auto-rows: 9vw;
  grid-template-columns: 1fr repeat(6, 3fr) 1fr;
  ${media.lessThan("medium")`grid-template-rows: 3vw;`}
}
`
export const Box = styled.div`
  cursor: pointer;
  position: relative;
  background-color: #fff;
  outline-style: solid;
  outline-color: #fff;
  outline-width: 1vw;
  background-color: ${props =>
    props.op && !props.colored
      ? "rgba(64,67,78,0.4)!important"
      : props.colored
      ? props.colored
      : ""};
  grid-column-end: span ${props => props.span};
  grid-row-end: span ${props => props.rowSpan};
  &.boxText {
    display: flex;
    flex-direction: ${props => (props.direction ? props.direction : "row")};
    align-items: ${props => (props.align ? props.align : "flex-end")};
    justify-content: ${props => (props.justify ? props.justify : "flex-start")};
  }
  &.boxSubText {
    display: flex;
    align-items: ${props => (props.align ? props.align : "flex-start")};
    justify-content: ${props => (props.justify ? props.justify : "flex-start")};
  }
  &:hover {
    background-color: #cca43b;
    & h1 {
      color: #242f40;
    }
  }
`

export const Title = styled.h1`
  color: #070707;
  font-size: ${props => (props.size ? props.size : 24)}%;
  ${media.lessThan("medium")`font-size: ${props =>
    props.mbSize ? props.mbSize : 24}%;`}
`

export const Subtitle = styled.h2`
  color: #070707;
  font-size: ${props => (props.size ? props.size : 32)}%;
  ${media.between("large", "medium")`font-size: 100%`}
  ${media.lessThan("medium")`font-size: ${props =>
    props.mbSize ? props.mbSize : 24}%;`}
`
