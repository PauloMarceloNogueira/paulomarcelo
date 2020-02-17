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
import { useStaticQuery, graphql, Link } from "gatsby"
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
              background
              category
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
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

  return (
    <Container>
      <Session>
        <SessionTitle>últimas do blog</SessionTitle>
        {postList.map(
          ({
            node: {
              fields: { slug },
              frontmatter: {
                background,
                category,
                title,
                date,
                description,
                subcategory,
              },
              timeToRead,
            },
          }) => (
            <BoxContent background={background}>
              <Date>
                {date} - {timeToRead} min de leitura
              </Date>
              <Title>
                <Anilink
                  cover
                  direction="left"
                  bg="#dbbe23"
                  duration={0.6}
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
