import styled from "styled-components"
import media from "styled-media-query"

export const Content = styled.div`
  display: flex;
  width: 100%;
  position: fixed;
  flex-direction: column;
  top: 0;
`

export const Container = styled.div`
  width: 100%;
  background-color: #0d0600;
  display: flex;
  padding: 0 150px;
  justify-content: space-between;
  ${media.lessThan("medium")`
    padding: 8px;
  `}
`
export const AuxContainer = styled.div`
  width: 100%;
  height: 3px;
  background-color: #dbbe23;
  display: block;
`

export const TitleContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 12px 0;
  justify-content: center;
  padding-left: 8px;
  ${media.lessThan("medium")`
    align-items:  flex-start;
  `}
`

export const Title = styled.h1`
  color: #fff;
  font-size: 14px;
  padding-bottom: 0px;
`

export const Subtitle = styled.h2`
  color: #fff;
  font-size: 10px;
`

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`
export const Row = styled.div`
  display: flex;
`
