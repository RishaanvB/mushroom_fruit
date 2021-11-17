import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import styled from "styled-components"
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs"

import Button from "@mui/material/Button"

const Container = styled.section`
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
      src="./placeholder-1.png"
      alt=""
    />,
    <StaticImage
      width={680}
      aspectRatio={1}
      fit="cover"
      src="./placeholder-2.png"
      alt=""
    />,
    <StaticImage
      width={680}
      aspectRatio={1}
      src="./placeholder-3.png"
      alt=""
    />,
  ]
  const headerData = ["Phase One", "Phase Two", "Phase Three"]
  const pData = ["Phase One text", "Phase Two TEXT", "Phase Three TEXT"]
  return (
    <Container>
      {imageData[number]}
      <StyledLeftArrow onClick={handleBack}>Back</StyledLeftArrow>
      <StyledInfoSection>
        <HeaderContainer>
          <StyledHeader>{headerData[number]}</StyledHeader>
          <Line></Line>
        </HeaderContainer>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
          itaque vero unde rem nostrum libero, porro a? Cum, laudantium sequi.
        </p>
        <p>{pData[number]}</p>
      </StyledInfoSection>
      <StyledRightArrow onClick={handleNext}>Next</StyledRightArrow>
    </Container>
  )
}

export default InfoSection
