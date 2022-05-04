import React from "react"
import styled from "styled-components"
import { Container, UnderlineHeader } from "../styles/CustomStyles"
import HowItWorksContainer from "./HowItWorksContainer"

const StyledBGSection = styled.section`
  position: relative;
  z-index: 1;
  width: 100%;
  padding-top: 4rem;
  padding-bottom: 4rem;
  background-size: cover;
  background-image: linear-gradient(120deg, #f8f8f8 0%, #f0f0f0 100%);
  background-position: center right;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media screen and (min-width: 1024px) {
    background-attachment: fixed;
  }
`

const HowItWorksSection = () => {
  return (
    <StyledBGSection>
      <Container>
        <UnderlineHeader color="#1B1917">How it works</UnderlineHeader>
        <HowItWorksContainer />
      </Container>
    </StyledBGSection>
  )
}

export default HowItWorksSection
