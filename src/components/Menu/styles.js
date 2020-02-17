import styled from "styled-components"
import media from "styled-media-query"

export const Container = styled.div`
  color: #fff;
`

export const MenuList = styled.ul`
  display: flex;
  flex: 1;
  justify-content: center;
  ${media.lessThan("small")`
    flex-direction: column;
    font-size: 5px;
  `}
`

export const MenuItem = styled.li`
  text-decoration: none;
  padding-left: 16px;
  list-style: none;
  cursor: pointer;
  font-size: 16px;
`
