import React, { useState } from "react"

import SEO from "../components/seo"
import { Container, Background, Box, Title, Subtitle } from "./styles"
import { useStaticQuery, graphql } from "gatsby"

const SecondPage = () => {
  const [index, setIndex] = useState(0)
  const { allFile } = useStaticQuery(
    graphql`
      query Images {
        allFile {
          totalCount
          nodes {
            childImageSharp {
              fixed(width: 1200, height: 1200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    `
  )
  // console.log(allFile)
  let images = []
  allFile.nodes.map(i => {
    if (i.childImageSharp && i.childImageSharp.fixed) {
      images.push(i.childImageSharp.fixed.src)
      return true
    }
    return true
  })

  const nextImage = () => {
    const n = index + 1
    setIndex(n)
    // index = 1
  }
  const prevImage = () => {
    const n = index - 1
    setIndex(n)
    // index = 0
  }
  return (
    <>
      <SEO title="Page two" />
      <Container image={images[index]}>
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
          <Box className="boxText" text={true} span={1}>
            <Title size={64}>Paulo</Title>
          </Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box op={true} span={1}></Box>
          <Box className="boxText" justify="flex-end" text={true} span={1}>
            <Subtitle size={18}>frontEnd</Subtitle>
          </Box>
          <Box op={true} span={1}></Box>
          <Box op={true} span={1}></Box>
          <Box className="boxSubText" text={true} span={1}>
            <Subtitle size={82}>Nogueira</Subtitle>
          </Box>
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
            <Title size={52}>DEVELOPER</Title>
            <Title size={32}>illustrator</Title>
          </Box>

          <Box op={true} span={2}></Box>
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
            <Title size={12} onClick={e => nextImage()}>
              Próxima
            </Title>
            <Title size={12} onClick={e => prevImage()}>
              Anterior
            </Title>
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
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box op={true} span={1}></Box>
          <Box></Box>
          <Box op={true} span={2}></Box>
          <Box></Box>
          <Box op={true} span={4}></Box>
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
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box op={true} span={2}></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
        </Background>
      </Container>
    </>
  )
}

export default SecondPage
