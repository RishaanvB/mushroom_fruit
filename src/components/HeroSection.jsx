import React from "react"
import styled from "styled-components"
import background from "../images/hero-bg-placeholder.jpg"
import { Container, Button } from "../styles/CustomStyles"

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

  const StyledHeader = styled.h1`
    color: white;
    border-left: 6px solid #f3bc77;
    padding: 2rem 0rem 2rem 2rem;
    max-width: 650px;
    line-height: 3rem;
    font-size: 3rem;
  `
  const StyledSubHeader = styled.p`
    color: white;
    max-width: 560px;
    line-height: 2rem;
    margin-bottom: 5rem;
    font-size: 1.2rem;
  `
const HeroSection = () => {

  return (
    <StyledBGSection>
      <Container>
        <StyledHeader>Grow your own indoor mushroom!</StyledHeader>
        <StyledSubHeader>
          Now is your chance! With the Reishi Growkit from Mushroomfruit,
          growing indoors has never been easier !
        </StyledSubHeader>
        <Button>Order here!</Button>
      </Container>
    </StyledBGSection>
  )
}

export default HeroSection
