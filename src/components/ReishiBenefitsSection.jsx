import React from "react"
import styled from "styled-components"
import { Button, Container, UnderlineHeader } from "../styles/CustomStyles"

import background from "../images/bg-reishi-benefits-mainpage.png"
import { GiSlicedMushroom } from "react-icons/gi"
import { FaHeartbeat } from "react-icons/fa"

const StyledBGSection = styled.section`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-image: url(${background});
  background-position: center right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-attachment: fixed;
`
const StyledSection = styled.section`
  background-color: #322921d9;
  display: flex;
`
const StyledBenefitContainer = styled.section`
  max-width: 30rem;
  padding: 4rem 0;
`
const StyledSmallHeader = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  color: #f3bc77;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const StyledInfoText = styled.p`
  color: white;
  margin-top: 2.5rem;
`

const StyledContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 4rem;
`
const StyledButton = styled(Button)`
  align-self: flex-start;
  margin-top:3rem;
`
const ReishiBenefitsSection = () => {
  return (
    <StyledBGSection>
      <Container>
        <UnderlineHeader>Reishi Benefits</UnderlineHeader>
      </Container>
      <StyledSection>
        <StyledContainer>
          <StyledBenefitContainer>
            <StyledSmallHeader>
              Consuming <GiSlicedMushroom size="3rem" color="white" />
            </StyledSmallHeader>

            <StyledInfoText>
              In order to get the full benefits of our product check out our
              complete guide on growing and maintaining your reishi here.
            </StyledInfoText>
          </StyledBenefitContainer>
          <StyledBenefitContainer>
            <StyledSmallHeader>
              Health <FaHeartbeat size="3rem" color="white" />
            </StyledSmallHeader>

            <StyledInfoText>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
              asperiores sint voluptate rerum maiores. Laudantium, possimus.
              Aperiam totam ducimus ipsa?
            </StyledInfoText>
          </StyledBenefitContainer>
        </StyledContainer>
      </StyledSection>
      <Container>
        <StyledButton>Learn More</StyledButton>
      </Container>
    </StyledBGSection>
  )
}

export default ReishiBenefitsSection
