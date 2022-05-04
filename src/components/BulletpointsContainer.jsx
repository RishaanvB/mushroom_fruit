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
  font-size: 1.2rem;
  grid-column: 2;
  margin-bottom: 0;
  font-weight: normal;
`
const StyledSubtext = styled.p`
  font-size: 0.9rem;
  grid-column: 2;
  margin: 0;
  margin-top: 1rem;
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
        <GiMushroomGills color="rgb(54 69 106)" size="2.5rem" />
        <StyledHeader>
          The Reishi mushroom grows through the substrate package.
        </StyledHeader>
        <StyledSubtext>
          The substrate consists of water, sawdust, wheat grain and gypsum.
        </StyledSubtext>
      </BulletpointsSection>
      <BulletpointsSection data-aos="fade-up">
        <GiSuperMushroom color="rgb(106 26 25)" size="2.5rem" />
        <StyledHeader>
          After some time, the Reishi mushroom will grow out at the top.
        </StyledHeader>
        <StyledSubtext>
          This process goes automatically, without the need to open the package.
        </StyledSubtext>
      </BulletpointsSection>
      <BulletpointsSection data-aos="fade-up">
        <GiSpottedMushroom color="rgb(77 74 36)" size="2.5rem" />
        <StyledHeader>
          The Reishi fruiting body will continue to grow for multiple months.
        </StyledHeader>
        <StyledSubtext>
          This is a beautiful process during which the mushroom will have many
          colors.
        </StyledSubtext>
      </BulletpointsSection>
      <BulletpointsSection data-aos="fade-up">
        <GiTrunkMushroom color="rgb(11 64 7)" size="2.5rem" />
        <StyledHeader>
          After a few months, the mushroom can be harvested
        </StyledHeader>
        <StyledSubtext>
          Harvested Reishi mushrooms can be used to make medicinal tea.
        </StyledSubtext>
      </BulletpointsSection>
    </StyledBulletpointsContainer>
  )
}

export default BulletpointsContainer
