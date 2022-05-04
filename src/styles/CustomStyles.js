import styled from "styled-components"
import { animated } from "@react-spring/web"
const Container = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 1320px;
  width: 100%;
`

const Button = styled(animated.button)`
  outline: none;
  border: none;
  color: black;
  background-color: #f3bc77;
  cursor: pointer;
  box-shadow:1px 2px 5px 1px rgb(63 63 63 / 45%);
  transition: background-color 0.2s ease-in;
  & > * {
    text-decoration: none;
    color: black;
    display: block;
    width: 100%;
    height: 100%;
    padding: 0.5rem 1rem;
  }
  &:hover {
    background-color: #bb905c;
  }
`
const UnderlineHeader = styled.h1`
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  background-image: url(${props => props.background});
  color: ${props => props.color ? props.color : 'white'};
  width: fit-content;
  @media screen and (min-width: 680px) {
    &::before {
      position: absolute;
      content: "";
      background-color: #f3bc77;
      height: 5px;
      width: 70%;
      bottom: -10px;
      left: 0;
    }
  }
`

export { Container, Button, UnderlineHeader }
