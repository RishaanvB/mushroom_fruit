import styled from "styled-components"

const Container = styled.div`
  margin: 0 auto;
  padding: 0 3rem;
  max-width: 1590px;
  width: 100%;
`

const Button = styled.button`
  outline: none;
  border:none;
  padding: .5rem 1rem;
  color: black;
  background-color: #f3bc77;
  cursor: pointer;
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

export {Container, Button,UnderlineHeader}

