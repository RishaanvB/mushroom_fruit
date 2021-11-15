import React from "react"
import styled from "styled-components"
import { Container, UnderlineHeader } from "../styles/CustomStyles"
import HowItWorksContainer from "./HowItWorksContainer"
import background from "../images/background-image-how-it-works.webp"

  const StyledBGSection = styled.section`
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-image: url(${background});
    background-position: center right;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-attachment: fixed;
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
