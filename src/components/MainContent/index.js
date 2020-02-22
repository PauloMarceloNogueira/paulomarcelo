import React from "react"
import Anilink from "gatsby-plugin-transition-link/AniLink"
import {
  Container,
  BoxContent,
  SessionTitle,
  Session,
  Date,
  Title,
  Description,
  Categories,
} from "./styles"
import { useStaticQuery, graphql } from "gatsby"
export default function MainContent() {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark(
        limit: 3
        sort: { fields: frontmatter___date, order: DESC }
        filter: { frontmatter: { category: { eq: "Blog" } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              thumbnail

              category
              date
              description
              title

              subcategory
            }
            timeToRead
          }
        }
      }
    }
  `)

  const postList = allMarkdownRemark.edges
  console.log(postList)
  return (
    <Container>
      <Session>
        <SessionTitle>últimas do blog</SessionTitle>
        {postList.map(
          ({
            node: {
              fields: { slug },
              frontmatter: { thumbnail, title, date, description, subcategory },
              timeToRead,
            },
          }) => (
            <BoxContent key={slug}>
              <Date>
                {date} - {timeToRead} min de leitura
              </Date>
              <Title>
                <Anilink
                  cover
                  hex="#000"
                  bg={`url(${
                    thumbnail
                      ? thumbnail
                      : "assets/img/naofazerarminha_final.jpg"
                  }) center/cover no-repeat fixed padding-box content-box white`}
                  direction="top"
                  duration={1}
                  to={slug}
                >
                  {title}
                </Anilink>
              </Title>
              <Description>{description}</Description>
              <Categories>#{subcategory}</Categories>
            </BoxContent>
          )
        )}
        {/* <BoxContent>IL2</BoxContent>
        <BoxContent>IL3</BoxContent> */}
      </Session>

      {/* <Session>
        <SessionTitle>últimas do blog</SessionTitle>
        <BoxContent>IL1</BoxContent>
        <BoxContent>IL2</BoxContent>
        <BoxContent>IL3</BoxContent>
      </Session> */}
    </Container>
  )
}
