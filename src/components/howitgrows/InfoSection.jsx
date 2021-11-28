import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import styled from "styled-components"
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs"
import { Container } from "../../styles/CustomStyles"
const StyledContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  grid-column-gap: 2.5rem;
  margin-bottom: 4rem;
  @media screen and (max-width: 1024px) {
    display: flex;
    margin: 2rem auto;
    flex-direction: column;
  }
`

const StyledInfoSection = styled.section`
  display: grid;
  grid-template-columns: auto 2fr auto;
  grid-column-gap: 1.5rem;

  @media screen and (min-width: 1025px) {
    align-self: start;
  }
  @media screen and (max-width: 1024px) {
    max-width: 663px;
  }
  @media screen and (max-width: 568px) {
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr 80px;
  }
`
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  margin-bottom: 1rem;
  @media screen and (max-width: 1024px) {
    margin-top: 2rem;
  }
`
const Line = styled.span`
  height: 1.8px;
  flex-grow: 1;
  background-color: #bababa;
`

const StyledHeader = styled.h1`
  position: relative;
  z-index: 8;
  font-size: 2rem;
  font-weight: normal;
  text-transform: uppercase;
  color: black;
  margin: 0;
`

const StyledLeftArrow = styled(BsArrowLeftCircle)`
  font-size: clamp(2rem, 2.5rem, 3rem);
  align-self: center;
  cursor: pointer;
  color: #f3bc77;
  transition: all 0.2s ease-in;
  &:hover {
    color: #96744c;
    transform: scale(1.1);
  }
  @media screen and (max-width: 568px) {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
  }
`
const StyledRightArrow = styled(BsArrowRightCircle)`
  font-size: clamp(2rem, 2.5rem, 3rem);
  align-self: center;
  cursor: pointer;
  color: #f3bc77;
  transition: all 0.2s ease-in;
  &:hover {
    color: #96744c;
    transform: scale(1.1);
  }
  @media screen and (max-width: 568px) {
    grid-row: 2 / 3;
    grid-column: -1 / -2;
    justify-self: end;
  }
`
const StyledTextContainer = styled.div`
  @media screen and (max-width: 568px) {
    grid-row: 1 / 2;
    grid-column: 1 / -1;
  }
`

const InfoSection = ({ number, handleBack, handleNext }) => {
  const imageData = [
    <StaticImage
      width={520}
      aspectRatio={1 / 1}
      src="../../images/placeholder-1.png"
      alt=""
    />,
    <StaticImage
      width={520}
      aspectRatio={1 / 1}
      fit="cover"
      src="../../images/placeholder-2.png"
      alt="placeholder"
    />,
    <StaticImage
      width={520}
      aspectRatio={1 / 1}
      src="../../images/placeholder-3.png"
      alt=""
    />,
  ]
  const headers = ["Phase One", "Phase Two", "Phase Three"]
  const paragraphs = ["Phase One text", "Phase Two TEXT", "Phase Three TEXT"]
  return (
    <Container>
      <StyledContainer>
        {imageData[number]}
        <StyledInfoSection>
          <StyledLeftArrow onClick={handleBack}>Back</StyledLeftArrow>
          <StyledTextContainer>
            <HeaderContainer>
              <StyledHeader>{headers[number]}</StyledHeader>
              <Line></Line>
            </HeaderContainer>
            <p style={{ maxWidth: "60ch" }}>
              L Ever since I graduated at Wageningen University in 2014, I have
              been passionately growing all sorts of culinary and medicinal
              mushrooms. Soon I came across the Reishi mushroom and ever since
              that first encounter, I have focused my efforts on how to best
              grow and consume this mushroom species. For the past five years,
              this mushroom species has introduced me into the world of
              mushrooms and has strengthened my interest in the field of
              mycology.
            </p>
            <p>{paragraphs[number]}</p>
          </StyledTextContainer>
          <StyledRightArrow onClick={handleNext}>Next</StyledRightArrow>
        </StyledInfoSection>
      </StyledContainer>
    </Container>
  )
}

export default InfoSection
