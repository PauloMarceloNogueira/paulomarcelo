import styled from "styled-components"
import media from "styled-media-query"

export const Container = styled.nav`
  margin-top: 120px;
  width: 100%;
  margin-left: 24px;
  flex-wrap: wrap;
`

export const BoxContent = styled.article`
  box-shadow: 0 1px 3px rgba(18, 18, 18, 0.12);
  color: rgba(15, 15, 15, 0.95);

  display: block;
  width: 30%;
  margin-right: 3%;
  min-height: 15rem;
  position: relative;
  will-change: border-color;
  border-radius: 2px;
  ${media.lessThan("medium")`
    width: 90%;
    margin-right: 3%;
    margin-bottom: 12px;
  `}
`
export const SessionTitle = styled.div`
  width: 100%;
  padding-bottom: 16px;
`

export const Session = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 24px;
  ${media.lessThan("medium")`
    flex-direction:column;
  `}
`

export const Date = styled.time`
  color: #757575;
  font-size: 14px;
  padding: 12px;
`

export const Title = styled.h1`
  padding: 12px;
  & a {
    color: #000;
    text-decoration: none;
    &:hover {
      color: #757575;
    }
  }
`

export const Description = styled.h2`
  padding: 12px;
  color: #757575;
  font-size: 16px;
`

export const Categories = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  text-align: right;
  padding: 12px;
  color: #757575;
  font-size: 12px;
`
