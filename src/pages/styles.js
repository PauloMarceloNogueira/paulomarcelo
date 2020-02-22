import styled from "styled-components"

export const Container = styled.div`
  background-color: #fff;
  background-repeat: no-repeat;
  background-image: url(${props => props.image});
  background-size: 100vw;
  background-position: center 6vw;
`
export const Background = styled.div`
  display: grid;
  grid-gap: 1vw;
  grid-template-rows: 5vw;
  grid-auto-rows: 9vw;
  grid-template-columns: 1fr repeat(6, 3fr) 1fr;
}
`
export const Box = styled.div`
  position: relative;
  background-color: #fff;
  outline-style: solid;
  outline-color: #fff;
  outline-width: 1vw;
  background-color: ${props =>
    props.op ? "rgba(64,67,78,0.4)!important" : ""};
  grid-column-end: span ${props => props.span};
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
`

export const Title = styled.h1`
  color: #000;
  font-size: ${props => (props.size ? props.size : 24)}px;
`

export const Subtitle = styled.h2`
  color: #000;
  font-size: ${props => (props.size ? props.size : 32)}px;
`
