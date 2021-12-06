import React from "react"
import styled from "styled-components"
import { Container, UnderlineHeader } from "../styles/CustomStyles"
import HowItWorksContainer from "./HowItWorksContainer"
import background from "../images/background-image-how-it-works2.webp"

const StyledBGSection = styled.section`
  position: relative;
  z-index:1;
  width: 100%;
  padding-top: 4rem;
  padding-bottom: 4rem;
  background-size: cover;
  background-image: url('https://images.unsplash.com/photo-1548048211-357ddb2c920f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80');
  background-position: center right;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &::before {
    position: absolute;
    z-index: -1;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #2f2b25a3;
    backdrop-filter:1px;
  }
  @media screen and (min-width: 1024px) {
    background-attachment: fixed;
  }
`

const HowItWorksSection = () => {
  return (
    <StyledBGSection>
      <Container>
        <UnderlineHeader>How it works</UnderlineHeader>
        <HowItWorksContainer />
      </Container>
    </StyledBGSection>
  )
}

export default HowItWorksSection
