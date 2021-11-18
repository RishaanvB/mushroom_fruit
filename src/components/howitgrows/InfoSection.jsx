import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import styled from "styled-components"
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs"

const StyledContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  column-gap: 3rem;
  margin-bottom: 4rem;
`
const StyledInfoSection = styled.section`
  width: 50%;
`
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  margin-bottom: 1rem;
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
  font-size: clamp(3rem, 4rem, 5rem);
  cursor: pointer;
  color: #f3bc77;
  transition: all 0.2s ease-in;
  &:hover {
    color: #96744c;
    transform: scale(1.1);
  }
`
const StyledRightArrow = styled(BsArrowRightCircle)`
  font-size: clamp(3rem, 4rem, 5rem);
  cursor: pointer;
  color: #f3bc77;
  transition: all 0.2s ease-in;
  &:hover {
    color: #96744c;
    transform: scale(1.1);
  }
`
const InfoSection = ({ number, handleBack, handleNext }) => {
  const imageData = [
    <StaticImage
      width={680}
      aspectRatio={1}
      src="../../images/placeholder-1.png"
      alt=""
    />,
    <StaticImage
      width={680}
      aspectRatio={1}
      fit="cover"
      src="../../images/placeholder-2.png"
      alt="placeholder"
    />,
    <StaticImage
      width={680}
      aspectRatio={1}
      src="../../images/placeholder-3.png"
      alt=""
    />,
  ]
  const headers = ["Phase One", "Phase Two", "Phase Three"]
  const paragraphs = ["Phase One text", "Phase Two TEXT", "Phase Three TEXT"]
  return (
    <StyledContainer>
      {imageData[number]}
      <StyledLeftArrow onClick={handleBack}>Back</StyledLeftArrow>
      <StyledInfoSection>
        <HeaderContainer>
          <StyledHeader>{headers[number]}</StyledHeader>
          <Line></Line>
        </HeaderContainer>
        <p>
          L Ever since I graduated at Wageningen University in 2014, I have been
          passionately growing all sorts of culinary and medicinal mushrooms.
          Soon I came across the Reishi mushroom and ever since that first
          encounter, I have focused my efforts on how to best grow and consume
          this mushroom species. For the past five years, this mushroom species
          has introduced me into the world of mushrooms and has strengthened my
          interest in the field of mycology.
        </p>
        <p>{paragraphs[number]}</p>
      </StyledInfoSection>
      <StyledRightArrow onClick={handleNext}>Next</StyledRightArrow>
    </StyledContainer>
  )
}

export default InfoSection
