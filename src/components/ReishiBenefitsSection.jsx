import React from "react"
import styled from "styled-components"
import { Button, Container, UnderlineHeader } from "../styles/CustomStyles"

import background from "../images/bg-reishi-benefits-mainpage.webp"
import { GiSlicedMushroom } from "react-icons/gi"
import { FaHeartbeat } from "react-icons/fa"
import {Link} from 'gatsby'

const StyledBGSection = styled.section`
  width: 100%;
  /* height: 100vh; */
  padding-top:4rem;
  padding-bottom:4rem;
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
  max-width: clamp(420px, 60%, 80%);
`
const StyledInfoText = styled.p`
  color: white;
  margin-top: 2.5rem;
  max-width: clamp(420px, 60%, 80%);
`

const StyledContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-column-gap: 4rem;
`
const StyledButton = styled(Button)`
  align-self: flex-start;
  margin-top: 3rem;
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
        <StyledButton> <Link to={'/consuming-reishi'}>Learn More</Link> </StyledButton>
      </Container>
    </StyledBGSection>
  )
}

export default ReishiBenefitsSection
