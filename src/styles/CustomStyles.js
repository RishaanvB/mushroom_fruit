import styled from "styled-components"


const Container = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 1320px;
  width: 100%;
`

const Button = styled.button`
  outline: none;
  border: none;
  color: black;
  background-color: #f3bc77;
  cursor: pointer;
  box-shadow: 1px 1px 5px 2px rgba(63, 63, 63, 0.37);
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
  margin-bottom: 4rem;
  position: relative;
  color: white;
  width: max-content;

  &::before {
    position: absolute;
    content: "";
    background-color: #f3bc77;
    height: 5px;
    width: 70%;
    bottom: -10px;
    left: 0;
  }
`

export { Container, Button, UnderlineHeader }
