import React, { useEffect } from "react"
import styled from "styled-components"
import { Button, Container, UnderlineHeader } from "../styles/CustomStyles"

import background from "../images/banner-howitworks.png"  // don't remove, should be used as background image in StyledBGSection component
import { GiSlicedMushroom } from "react-icons/gi"
import { FaHeartbeat } from "react-icons/fa"
import { Link } from "gatsby"
import AOS from "aos"
import "aos/dist/aos.css"

const StyledBGSection = styled.section`
  width: 100%;
  padding-top: 4rem;
  padding-bottom: 4rem;
  background-size: cover;
  background-image: url("https://images.unsplash.com/photo-1548048211-357ddb2c920f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80");
  background-position: center right;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 1024px) {
    background-attachment: fixed;
  }
`
const StyledSection = styled.section`
  background-color: #191c1bd9;
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
  max-width: clamp(420px, 60%, 80%);
`
const StyledInfoText = styled.p`
  color: white;
  margin-top: 2.5rem;
  max-width: clamp(420px, 60%, 80%);
`

const StyledContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  grid-column-gap: 4rem;
  @media screen and (max-width: 520px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-column-gap: 1rem;
  }
`
const StyledButton = styled(Button)`
  align-self: flex-start;
  margin-top: 3rem;
`
const ReishiBenefitsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 750,
    })
  }, [])
  return (
    <StyledBGSection>
      <Container>
        <UnderlineHeader>Consuming Reishi</UnderlineHeader>
      </Container>
      <StyledSection>
        <StyledContainer>
          <StyledBenefitContainer data-aos="zoom-in-up">
            <StyledSmallHeader>
              How to prepare
              <GiSlicedMushroom size="3rem" color="white" />
            </StyledSmallHeader>

            <StyledInfoText>
              To get the most out of Reishi's bio-active compounds, check out
              the complete guide on how to harvest and process the Reishi
              fruiting body into a medicinal tea.
            </StyledInfoText>
          </StyledBenefitContainer>
          <StyledBenefitContainer data-aos="zoom-in-up">
            <StyledSmallHeader>
              Benefits to health <FaHeartbeat size="3rem" color="white" />
            </StyledSmallHeader>

            <StyledInfoText>
              The Reishi fruiting body contains a wealth of bio-active
              compounds, that can have a direct effect on all sorts of health
              factors in the human body. These include polysaccharides such as
              β-glucans, triterpenoids such as ganoderic acids, and
              glycoproteins such as Ling Zhi-8.
            </StyledInfoText>
          </StyledBenefitContainer>
        </StyledContainer>
      </StyledSection>
      <Container>
        <StyledButton>
          {" "}
          <Link to={"/consuming-reishi"}>Learn More</Link>{" "}
        </StyledButton>
      </Container>
    </StyledBGSection>
  )
}

export default ReishiBenefitsSection
