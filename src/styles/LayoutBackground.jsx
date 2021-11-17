import React from "react"
import styled from "styled-components"
import { Container, UnderlineHeader } from "./CustomStyles"

const StyledBGSection = styled.section`
  width: 100%;
  height: 320px;
  background-size: cover;
  background-image: url(${props => props.background});
  background-position: bottom right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 4rem;
  padding-bottom: 5rem;
`
const SyledUnderlineHeader = styled(UnderlineHeader)`
  text-transform: uppercase;
  margin: 0 auto;
  padding-top: 3.5rem;
`
const LayoutBackground = ({ background, headerText }) => {
  return (
    <StyledBGSection background={background}>
      <Container>
        <SyledUnderlineHeader>{headerText}</SyledUnderlineHeader>
      </Container>
    </StyledBGSection>
  )
}

export default LayoutBackground
