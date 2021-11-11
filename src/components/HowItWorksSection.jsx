import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Container } from "../styles/CustomStyles"
import HowItWorksContainer from "./HowItWorksContainer"
import background from "../images/background-image-how-it-works.png"

const HowItWorksSection = () => {
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
  const UnderlineHeader = styled.h1`
    /* margin-top: 7rem; */
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
