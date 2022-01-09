import React, { useEffect } from "react"
import styled from "styled-components"
import {
  GiMushroomGills,
  GiSuperMushroom,
  GiSpottedMushroom,
  GiTrunkMushroom,
} from "react-icons/gi"

import AOS from "aos"
import "aos/dist/aos.css"

const StyledBulletpointsContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-left: 5rem; */
  align-items: center;
  justify-content: space-between;
  align-self: center;
`

const BulletpointsSection = styled.section`
  color: #1b1917;

  display: grid;
  grid-template-columns: 2;
  grid-template-rows: 2;
  grid-column-gap: 10px;
  margin-bottom: 1rem;
  margin-top: 1rem;
`
const StyledHeader = styled.h1`
  /* color: white; */
  font-size: 1.2rem;
  grid-column: 2;
  margin-bottom: 0;
`
const StyledSubtext = styled.p`
  /* color: white; */
  font-size: 0.9rem;
  grid-column: 2;
  margin: 0;
`

const BulletpointsContainer = () => {
  useEffect(() => {
    AOS.init({
      duration: 750,
    })
  }, [])

  return (
    <StyledBulletpointsContainer>
      <BulletpointsSection data-aos="fade-up">
        <GiMushroomGills color="#504021" size="2.5rem" />
        <StyledHeader>5:Lorem ipsum dolor sit amet</StyledHeader>
        <StyledSubtext>
          6:Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
          consectetur ut labore. Dolore, quasi ut.
        </StyledSubtext>
      </BulletpointsSection>
      <BulletpointsSection data-aos="fade-up">
        <GiSuperMushroom color="#3b2e13" size="2.5rem" />
        <StyledHeader>7:Lorem ipsum dolor sit amet</StyledHeader>
        <StyledSubtext>
          8:Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
          consectetur ut labore. Dolore, quasi ut.
        </StyledSubtext>
      </BulletpointsSection>
      <BulletpointsSection data-aos="fade-up">
        <GiSpottedMushroom color="#523f18" size="2.5rem" />
        <StyledHeader>9:Lorem ipsum dolor sit amet</StyledHeader>
        <StyledSubtext>
          10:Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
          consectetur ut labore. Dolore, quasi ut.
        </StyledSubtext>
      </BulletpointsSection>
      <BulletpointsSection data-aos="fade-up">
        <GiTrunkMushroom color="#3a301c" size="2.5rem" />
        <StyledHeader>11:Lorem ipsum dolor sit amet</StyledHeader>
        <StyledSubtext>
          12:Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
          consectetur ut labore. Dolore, quasi ut.
        </StyledSubtext>
      </BulletpointsSection>
    </StyledBulletpointsContainer>
  )
}

export default BulletpointsContainer
